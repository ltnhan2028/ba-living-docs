---
name: chuan-hoa-tai-lieu-srs
description: >-
  Use this skill when initializing a new project folder in ba-living-docs,
  converting legacy Word/SRS/meeting-note documents and diagrams into the
  5-chapter IEEE 830 / ISO 29148 Living Docs format, or updating existing
  feature specs (v1.x / v2.0) and verifying GitBook links.
---

# Chuẩn hóa & Cập nhật Tài liệu SRS Living Docs

Quy trình chuẩn để chuyển thể tài liệu cũ (`.docx`, `.md`, sơ đồ, ảnh Figma) hoặc cập nhật phần mềm vào kho `ba-living-docs` theo đúng chuẩn **IEEE 830 / ISO/IEC/IEEE 29148** và tương thích 100% với **GitBook**.

---

## Bước 1: Đọc & Đánh giá tài liệu nguồn (trước khi viết)

1. Nếu nguồn có file Word (`.docx`), chạy script bóc tách text + bảng + vị trí hình ảnh:
   ```powershell
   python .agents/skills/chuan-hoa-tai-lieu-srs/scripts/extract_docx.py "<duong-dan-file.docx>" "<thu-muc-tam>"
   ```
   Script xuất ra:
   - `extracted_text.txt`: toàn bộ heading, đoạn văn, bảng và marker `[IMAGE #NN -> word/media/...]` đúng thứ tự xuất hiện.
   - `images_map.txt`: bảng đối chiếu từng ảnh với `Heading` và chú thích `prev`/`next` để đặt ảnh vào đúng màn hình, không bao giờ nhầm vị trí.
2. Đối chiếu tài liệu nguồn với chuẩn **IEEE 830 / ISO 29148** để lập danh sách:
   - Các phần thiếu (`AC`, `Data Dictionary`, `RBAC Matrix`, `API/Integration`, `NFR`, màn hình bị bỏ trống).
   - Các mâu thuẫn nội tại giữa flow, mô tả màn hình, `FR-*` và `BR-*`.
   - Các chức năng cần tách thành từng file trong `01-tinh-nang/`.
3. Báo cáo bản đánh giá & đề xuất danh sách file tính năng cho người dùng chốt trước khi sinh hàng loạt (nếu là dự án mới).

---

## Bước 2: Chuyển tài nguyên hình ảnh (`assets/`)

1. Tạo `<du-an>/assets/`.
2. Copy sơ đồ chuẩn (Use Case, Flowchart, Swimlane, Sequence, State Diagram) và ảnh UI/Figma đã đối chiếu từ `images_map.txt` vào `<du-an>/assets/`.
3. **Bắt buộc đổi tên file sang ASCII viết thường, nối gạch ngang, không dấu, không khoảng trắng** (vd: `flowchart-tong-quan.jpg`, `ui-01-dang-nhap.png`).

---

## Bước 3: Dựng bộ khung 5 chương chuẩn SRS

Tạo hoặc cập nhật đủ các file trong `<du-an>/` theo đúng chuẩn quy định tại [AGENTS.md](../../../AGENTS.md):

1. `README.md` — Giới thiệu & điều hướng 5 chương.
2. `00-tong-quan.md` — Chương 1: Thông tin chung, Phạm vi & Ranh giới hệ thống ngoài, Glossary, Vai trò & RBAC Matrix, Sơ đồ tổng quan & State Diagrams.
3. `02-quy-tac-chung.md` — Chương 2.1: Quy tắc vận hành chung, Data Dictionary, Master Data.
4. `04-tich-hop-api.md` — Chương 2.2: Bản đồ & đặc tả tích hợp API, đồng bộ, retry/fail-over.
5. `01-tinh-nang/README.md` + `01-tinh-nang/NN-<slug>.md` — Chương 3: Mỗi tính năng tuân thủ **template 7 phần** (`Mục tiêu`, `Luồng & Sơ đồ`, `Màn hình & Trường dữ liệu`, `FR-*`, `BR-*`, `AC-*`, `UI & Lịch sử thay đổi`).
6. `05-yeu-cau-phi-chuc-nang.md` — Chương 4: Performance, Concurrency, Mobile Offline, Storage/Media, Security & Audit Trail.
7. `06-diem-thieu-va-mau-thuan.md` — Chương 5.1: Bảng `GAP-*` tổng hợp mọi điểm thiếu/mâu thuẫn của tài liệu gốc.
8. `03-nhat-ky-chot.md` — Chương 5.2: Bảng `DEC-*` (các mốc đã chốt) và `OPEN-*` (các điểm mở cần xác nhận).

**Nguyên tắc viết:**
- Không tự bịa quy tắc khi nguồn không có; dùng `> [!WARNING]` cho phần thiếu và `> [!CAUTION]` cho phần mâu thuẫn.
- Giữ nguyên định dạng `**Phiên bản hiện tại:** \`vX.Y\` · **Cập nhật lần cuối:** YYYY-MM-DD` và tiêu đề `Lịch sử thay đổi` để `.github/scripts/update-version-history.mjs` hoạt động chính xác.

---

## Bước 4: Cập nhật `SUMMARY.md` cho GitBook

1. Cập nhật `<du-an>/SUMMARY.md` theo cây 5 chương phẳng (không lồng danh sách tính năng vào trong 1 mục `Danh mục tính năng >`, không đánh trùng số nhóm và số trang).
2. Cập nhật mục tương ứng trong `SUMMARY.md` ở root repo.

---

## Bước 5: Kiểm tra trước khi hoàn tất / Commit

1. Chạy script kiểm tra toàn bộ liên kết nội bộ & hình ảnh:
   ```powershell
   python .agents/skills/chuan-hoa-tai-lieu-srs/scripts/check_links.py "<ten-folder-du-an>"
   ```
   Đảm bảo kết quả báo **`All links OK!`** (exit code `0`).
2. Nếu người dùng yêu cầu commit/push:
   - Không dùng tiền tố `GITBOOK-` trong commit message.
   - Dùng message rõ nghĩa theo chuẩn Conventional Commits, ví dụ: `docs(<ma-du-an>): v1.0 baseline theo SRS ...` hoặc `docs(<ma-du-an>): cap nhat v1.1 theo phan mem hien tai`.
