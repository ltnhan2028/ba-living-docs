# Quy chuẩn kho tài liệu Living Docs (`ba-living-docs`)

Mọi thao tác khởi tạo dự án mới, chuyển thể tài liệu cũ hoặc cập nhật đặc tả trong repo này **bắt buộc** tuân thủ các quy chuẩn dưới đây.

---

## 1. Cấu trúc chuẩn 5 chương cho mỗi dự án (IEEE 830 / ISO/IEC/IEEE 29148)

Mỗi dự án là một thư mục slug ASCII viết thường nối gạch ngang ở root (vd: `thay-the-dong-ho-nuoc/`), gồm:

| File / Thư mục | Chương SRS | Vai trò |
|---|---|---|
| `README.md` | Mở đầu | Giới thiệu ngắn, mốc phiên bản hiện tại, điều hướng 5 chương |
| `00-tong-quan.md` | Chương 1 | Mục tiêu, Phạm vi & Ranh giới tích hợp, Glossary, RBAC Matrix, Use Case / Flowchart / State Diagrams |
| `02-quy-tac-chung.md` | Chương 2.1 | Quy tắc vận hành chung, Data Dictionary, Master Data |
| `04-tich-hop-api.md` | Chương 2.2 | Bản đồ & đặc tả tích hợp hệ thống ngoài / API / Retry |
| `01-tinh-nang/README.md` | Chương 3 (index) | Bảng tổng hợp các tính năng của dự án |
| `01-tinh-nang/NN-<ten>.md` | Chương 3.1 – 3.x | Đặc tả chi tiết từng tính năng (Web & Mobile) |
| `05-yeu-cau-phi-chuc-nang.md` | Chương 4 | Hiệu năng, Concurrency, Mobile Offline, Lưu trữ ảnh, Bảo mật & Audit |
| `06-diem-thieu-va-mau-thuan.md` | Chương 5.1 | Bảng tổng hợp `GAP-*` các điểm thiếu hoặc mâu thuẫn cần bổ sung |
| `03-nhat-ky-chot.md` | Chương 5.2 | Nhật ký quyết định nghiệp vụ (`DEC-*`), danh sách **TBD List (`TBD-*`)** & Roadmap `v2.0` (`RM-*`) |
| `assets/` | Tài nguyên | Sơ đồ & ảnh UI của riêng dự án, tên file ASCII không dấu (`flowchart-*`, `sequence-*`, `state-*`, `ui-*`) |
| `SUMMARY.md` | Mục lục | Sidebar GitBook riêng của dự án |

---

## 2. Cấu trúc `SUMMARY.md` cho GitBook

- Không lồng cấp thừa kiểu có `## 01. TÍNH NĂNG` rồi chỉ đặt 1 mục `Danh mục tính năng >` bọc bên ngoài toàn bộ file con. Liệt kê thẳng `3.1`, `3.2`... dưới `## 3. Đặc tả chức năng (System Features)`.
- Không đánh trùng số giữa tên nhóm (`## 2. ...`) và tên trang con (`2.1. ...`, `2.2. ...`).
- Khi thêm/sửa/xóa file trong một dự án, **luôn cập nhật đồng bộ** cả `<du-an>/SUMMARY.md` và `SUMMARY.md` ở root (nếu dự án có mặt trong root `SUMMARY.md`).

---

## 3. Template 7 phần bắt buộc cho mỗi file trong `01-tinh-nang/`

Mỗi file đặc tả tính năng phải giữ đủ 7 mục sau theo đúng thứ tự:

1. Header metadata (khớp regex của `.github/scripts/update-version-history.mjs`):
   ```markdown
   > **Phiên bản hiện tại:** `v1.0` · **Cập nhật lần cuối:** YYYY-MM-DD · **Trạng thái:** ...
   ```
2. `## 1. Mục tiêu & Tác nhân liên quan`
3. `## 2. Luồng nghiệp vụ (Flow & Diagrams)` *(kèm Flowchart / Swimlane / Sequence Diagram nếu có)*
4. `## 3. Đặc tả màn hình & Trường dữ liệu` *(bảng UI fields: Tên trường, Kiểu, Bắt buộc, Mô tả / Validate)*
5. `## 4. Yêu cầu chức năng (Functional Requirements)` *(bảng `FR-<MOD>-NN`)*
6. `## 5. Quy tắc nghiệp vụ (Business Rules)` *(bảng `BR-<MOD>-NN`)*
7. `## 6. Tiêu chí nghiệm thu (Acceptance Criteria)` *(checklist `AC-<MOD>-NN` duy nhất toàn dự án, kiểm thử được)*
8. `## 7. Giao diện (UI) & Lịch sử thay đổi` *(ảnh màn hình UI và bảng Lịch sử thay đổi)*

**Quy ước mã định danh (Traceability — ISO 29148):**
- Mọi mã `FR-*`, `BR-*`, `AC-*` phải gắn mã module để **duy nhất toàn dự án** (vd: `AC-HC-01`, `AC-TN-01`, `AC-VT-01`), tránh trùng `AC-01` giữa các màn hình.
- Mã `DEC-*` **chỉ cấp cho quyết định nghiệp vụ hoặc phạm vi** (không cấp cho thao tác khởi tạo folder, format tài liệu hay dọn repo).
- Các điểm chưa chốt dùng chuẩn **TBD List (`TBD-*` — To Be Determined)** thay cho `OPEN-*`.

**Định dạng bảng `Lịch sử thay đổi` ở cuối file** (không đổi tên cột `| Phiên bản | Ngày |` để GitHub Action nhận diện đúng):

```markdown
| Phiên bản | Ngày | Người chốt | Tóm tắt thay đổi |
|---|---|---|---|
| `v1.0` | YYYY-MM-DD | nhanlt | ... |
```

- **Người chốt mặc định:** Chủ dự án tên đầy đủ là **Lê Thanh Nhàn**; khi ghi cột `Người chốt` (Lịch sử thay đổi) hoặc `Người xác nhận` (`03-nhat-ky-chot.md`), luôn ghi là `nhanlt`.

---

## 4. Nguyên tắc trung thực dữ liệu & Quản lý phiên bản

- **Không tự bịa nghiệp vụ khi tài liệu gốc thiếu:** Phải giữ nguyên bản chất tài liệu nguồn (đặc biệt với bản Baseline `v1.0` ký hợp đồng) và gắn thẻ ngay tại chỗ:
  - `> [!WARNING] Thiếu đặc tả ...` cho phần thiếu (`AC`, `Data Dictionary`, `API`, `NFR`, trường validate...).
  - `> [!CAUTION] Mâu thuẫn ...` cho hai rule hoặc mô tả đá nhau.
  - Tổng hợp lại vào `06-diem-thieu-va-mau-thuan.md` (`GAP-*`) và `03-nhat-ky-chot.md` (`TBD-*`).
- **Quản lý 3 pha tài liệu:**
  1. `v1.0`: Baseline tài liệu gốc ban đầu.
  2. `v1.x`: Cập nhật cho khớp phần mềm hiện tại đang chạy; tăng minor version trong header + thêm dòng vào bảng `Lịch sử thay đổi` + ghi `DEC-*` vào `03-nhat-ky-chot.md`. **Bắt buộc rà đồng bộ lại Chương 1 (`00-tong-quan.md`), Chương 2 (`02-quy-tac-chung.md`, `04-tich-hop-api.md`) và Chương 4 (`05-yeu-cau-phi-chuc-nang.md`)** để tránh số liệu/rule cũ bị lệch so với Chương 3.
  3. `v2.0` / Change Request: Bóc tách rõ thay đổi so với `v1.x` để trao đổi phạm vi với khách hàng; với tính năng thiết kế mới cho Dev code, Mục 3 bắt buộc trình bày dạng bảng (`Tên trường | Kiểu | Bắt buộc | Mô tả / Validate`).
- **Tương thích Automation & Luồng GitHub ↔ GitBook ↔ Manual:**
  - **Local (VS Code / AI → GitHub):** Dùng cho khởi tạo dự án, cập nhật lớn (`v1.x` / `v2.0`), thêm ảnh vào `<du-an>/assets/`, chỉnh `SUMMARY.md`. **Luôn `git pull` trước khi sửa** nếu trước đó có chỉnh trên GitBook.
  - **GitBook UI:** Chỉ dùng để đọc, review, sửa nhanh typo/ghi chú nhỏ; **luôn nhập tiêu đề Change Request rõ ràng** trước khi merge và hạn chế dán ảnh `Ctrl+V` trên GitBook (tránh phát sinh ảnh rác trong `.gitbook/assets/`).
  - Commit do AI/BA tạo **không** đặt tiền tố `GITBOOK-` ở đầu commit message (tiền tố này dành riêng cho GitBook sync để `.github/scripts/update-version-history.mjs` tự tăng version cho file có bảng `| Phiên bản | Ngày |` và cập nhật ngày cho file tổng quan).
  - Sau khi sửa hoặc tạo mới tài liệu, luôn chạy `check_links.py` đảm bảo không có link/ảnh gãy trước khi kết thúc.
