import { execSync } from "node:child_process";
import fs from "node:fs";

const commitMsg = execSync("git log -1 --pretty=%s", { encoding: "utf8" }).trim();
const authorName = execSync("git log -1 --pretty=%an", { encoding: "utf8" }).trim();
const authorEmail = execSync("git log -1 --pretty=%ae", { encoding: "utf8" }).trim();

// Chỉ tự động ghi khi commit đến từ GitBook (tránh trùng lặp với commit do AI/BA đã tự ghi version)
if (!commitMsg.startsWith("GITBOOK-")) {
  console.log("Skip: commit is not from GitBook:", commitMsg);
  process.exit(0);
}

// Chuẩn hóa tên người chốt về định danh nội bộ (khớp AGENTS.md)
const AUTHOR_MAP = new Map([
  ["lethanhnhan2028@gmail.com", "nhanlt"],
  ["thanh nhan le", "nhanlt"],
  ["le thanh nhan", "nhanlt"],
  ["lê thanh nhàn", "nhanlt"],
  ["lê nhân", "nhanlt"],
]);

const resolvedAuthor =
  AUTHOR_MAP.get(authorEmail.toLowerCase()) ||
  AUTHOR_MAP.get(authorName.toLowerCase()) ||
  authorName;

const changedFilesRaw = execSync(
  "git -c core.quotepath=false diff-tree --no-commit-id --name-only -r HEAD",
  { encoding: "utf8" },
).trim();

if (!changedFilesRaw) {
  process.exit(0);
}

const files = changedFilesRaw
  .split(/\r?\n/)
  .map((f) => f.trim())
  .filter((f) => f.endsWith(".md") && fs.existsSync(f));

// Ngày theo múi giờ Việt Nam (UTC+7)
const todayVN = new Date(Date.now() + 7 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const rawSummary = commitMsg.replace(/^GITBOOK-\d+:\s*/i, "").trim();
const summary =
  !rawSummary || /^change request with no subject/i.test(rawSummary)
    ? "Cập nhật nội dung trên GitBook"
    : rawSummary;

const TABLE_HEADER_RE = /^\|\s*Phiên bản\s*\|\s*Ngày\s*\|/i;

let updatedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  const lines = content.split(/\r?\n/);

  // Tìm tiêu đề bảng Lịch sử thay đổi cuối cùng trong file (tránh khớp nhầm vào nội dung mục 1..6)
  let tableHeaderIdx = -1;
  for (let i = lines.length - 1; i >= 0; i--) {
    if (TABLE_HEADER_RE.test(lines[i].trim())) {
      tableHeaderIdx = i;
      break;
    }
  }

  // Trường hợp file không có bảng Lịch sử thay đổi (file chương tổng quan): chỉ cập nhật ngày nếu có metadata ngày
  if (tableHeaderIdx === -1) {
    const updatedOverview = content.replace(
      /(\*\*Cập nhật(?: lần cuối)?:\*\*\s*)\d{4}-\d{2}-\d{2}/,
      `$1${todayVN}`,
    );
    if (updatedOverview !== content) {
      fs.writeFileSync(file, updatedOverview, "utf8");
      updatedCount++;
      console.log(`Updated date in overview doc ${file} -> ${todayVN}`);
    }
    continue;
  }

  // Tìm version hiện tại dạng `v1.1`
  const verMatch = content.match(/\*\*Phiên bản hiện tại:\*\*\s*`v(\d+)\.(\d+)`/);
  let nextVer = "v1.1";
  if (verMatch) {
    const major = Number(verMatch[1]);
    const minor = Number(verMatch[2]) + 1;
    nextVer = `v${major}.${minor}`;
    content = content.replace(
      /(\*\*Phiên bản hiện tại:\*\*\s*`)v\d+\.\d+(`)/,
      `$1${nextVer}$2`,
    );
  }

  content = content.replace(
    /(\*\*Cập nhật lần cuối:\*\*\s*)\d{4}-\d{2}-\d{2}/,
    `$1${todayVN}`,
  );

  // Chèn thêm 1 dòng vào cuối bảng Lịch sử thay đổi
  const cleanSummary = summary.replace(/\|/g, "\\|");
  const newRow = `| \`${nextVer}\` | ${todayVN} | ${resolvedAuthor} | ${cleanSummary} (qua GitBook) |`;

  const updatedLines = content.split(/\r?\n/);
  let lastTableRowIdx = tableHeaderIdx;
  for (let i = tableHeaderIdx + 1; i < updatedLines.length; i++) {
    if (updatedLines[i].trim().startsWith("|")) {
      lastTableRowIdx = i;
    } else {
      break;
    }
  }

  updatedLines.splice(lastTableRowIdx + 1, 0, newRow);
  fs.writeFileSync(file, updatedLines.join("\n"), "utf8");
  updatedCount++;
  console.log(`Updated version history in ${file} -> ${nextVer} (${resolvedAuthor})`);
}

if (updatedCount === 0) {
  console.log("No docs needed version history or date update.");
}
