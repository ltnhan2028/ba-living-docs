import { execSync } from "node:child_process";
import fs from "node:fs";

const commitMsg = execSync("git log -1 --pretty=%s", { encoding: "utf8" }).trim();
const author = execSync("git log -1 --pretty=%an", { encoding: "utf8" }).trim();

// Chỉ tự động ghi khi commit đến từ GitBook (tránh trùng lặp với commit do AI/BA đã tự ghi version)
if (!commitMsg.startsWith("GITBOOK-")) {
  console.log("Skip: commit is not from GitBook:", commitMsg);
  process.exit(0);
}

const changedFilesRaw = execSync(
  "git diff-tree --no-commit-id --name-only -r HEAD",
  { encoding: "utf8" },
).trim();

if (!changedFilesRaw) {
  process.exit(0);
}

const files = changedFilesRaw
  .split("\n")
  .map((f) => f.trim())
  .filter((f) => f.endsWith(".md") && fs.existsSync(f));

// Ngày theo múi giờ Việt Nam (UTC+7)
const todayVN = new Date(Date.now() + 7 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const summary =
  commitMsg.replace(/^GITBOOK-\d+:\s*/i, "").trim() ||
  "Cập nhật nội dung / ảnh từ GitBook";

let updatedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");

  // Chỉ xử lý file có bảng Lịch sử thay đổi
  if (!content.includes("Lịch sử thay đổi")) continue;

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
  const newRow = `| \`${nextVer}\` | ${todayVN} | ${author} | ${cleanSummary} (qua GitBook) |`;

  const lines = content.split(/\r?\n/);
  const histIdx = lines.findIndex((l) => l.includes("Lịch sử thay đổi"));
  if (histIdx !== -1) {
    let lastTableRowIdx = -1;
    for (let i = histIdx + 1; i < lines.length; i++) {
      if (lines[i].trim().startsWith("|")) {
        lastTableRowIdx = i;
      } else if (lastTableRowIdx !== -1 && lines[i].trim() !== "") {
        break;
      }
    }
    if (lastTableRowIdx !== -1) {
      lines.splice(lastTableRowIdx + 1, 0, newRow);
      content = lines.join("\n");
      fs.writeFileSync(file, content, "utf8");
      updatedCount++;
      console.log(`Updated version history in ${file} -> ${nextVer}`);
    }
  }
}

if (updatedCount === 0) {
  console.log("No feature docs with Version History needed update.");
}
