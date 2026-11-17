# 5.2. Nhật ký chốt & Vấn đề mở (Decision Log)

Ghi nhận các mốc phiên bản và các quyết định nghiệp vụ (`DEC-*`) đã thống nhất với Khách hàng / PM / Dev, cùng danh sách vấn đề mở (`OPEN-*`) cần chốt để nâng cấp từ bản Baseline `v1.0` lên phần mềm hiện tại (`v1.x`) và Phase nâng cấp (`v2.0`).

---

## 1. Lịch sử quyết định đã chốt (`DEC-*`)

| Ngày | Mã | Nội dung đã chốt | Người xác nhận | Tài liệu bị ảnh hưởng |
|---|---|---|---|---|
| 2026-11-13 | `DEC-01` | Khởi tạo khung kho tài liệu dự án Thay thế đồng hồ nước | Lê Nhân | [Tổng quan dự án](00-tong-quan.md) |
| 2026-11-17 | `DEC-02` | Đẩy bản Baseline `v1.0` từ `SRS_ThayDHN_V1.4.docx` (bản ký hợp đồng) lên Living Docs kèm 21 sơ đồ và 26 ảnh Figma | Lê Nhân | Toàn bộ thư mục `thay-the-dong-ho-nuoc/` |
| 2026-11-17 | `DEC-03` | Chuẩn hóa cấu trúc cây tài liệu dự án Thay ĐHN theo chuẩn quốc tế **IEEE 830 / ISO 29148** (5 chương: Tổng quan → Dữ liệu & API → 11 Chức năng → NFR → Phụ lục) | Lê Nhân | `SUMMARY.md` và các file chương `02`, `04`, `05`, `06` |

---

## 2. Danh sách vấn đề mở cần đối chiếu & chốt (`OPEN-*`)

> [!TIP] Hướng dẫn sử dụng
> Khi rà soát lại **phần mềm hiện tại** (`v1.x`) hoặc họp chốt **Phase nâng cấp** (`v2.0`), mỗi mục `OPEN-*` dưới đây sau khi được xác nhận sẽ chuyển thành một dòng `DEC-*` ở bảng trên và cập nhật thẳng vào file tính năng tương ứng.

| Mã | Chủ đề | Câu hỏi / Mâu thuẫn cần chốt | Mức độ | Tài liệu liên quan |
|---|---|---|---|---|
| `OPEN-01` | Trở ngại loại 1, 2, 3 | Hủy hẳn yêu cầu thay (theo `4.7.1` & `BR-37`) hay chuyển sang Nhắc thay luôn (theo `BR-29`)? | Cao | [08. Xử lý trở ngại](01-tinh-nang/08-xu-ly-tro-ngai.md) |
| `OPEN-02` | Điều kiện chốt bảng kê | Phần mềm hiện tại cho phép chốt bảng kê khi điều kiện các dòng trong BK như thế nào (khi còn dòng `Chưa thay` / `Trở ngại` thì xử lý ra sao)? | Cao | [07. Hoàn công & Chốt BK](01-tinh-nang/07-hoan-cong-va-chot-bang-ke.md) |
| `OPEN-03` | Danh sách Code đọc số | Chốt tập Code lỗi chính xác (`60, 61` hay `60, 61, 62, 63, 64, 66`) và luồng đồng bộ ngược về hệ thống Đọc số khi không duyệt. | Cao | [03. Duyệt BT bất thường](01-tinh-nang/03-duyet-bao-thay-bat-thuong.md) |
| `OPEN-04` | Import vật tư | Làm rõ định dạng file Excel import ĐHN & Chì góc, rule check trùng số thân/số chì và luồng trừ tồn khi hoàn công. | Cao | [10. Import vật tư](01-tinh-nang/10-import-vat-tu.md) |
| `OPEN-05` | Thông tin ĐHN gỡ khi hoàn công | Bắt buộc nhập đầy đủ (theo `BR-27`) hay cho phép bỏ trống (theo mục `5.3`)? | Trung bình | [07. Hoàn công & Chốt BK](01-tinh-nang/07-hoan-cong-va-chot-bang-ke.md) |
| `OPEN-06` | Tham số "Kỳ" trong Nhắc thay | Định nghĩa chính xác 1 "kỳ" để tính trễ hạn (`BR-36`) và quy tắc sinh/kiểm tra trùng `Số BK nhắc thay` (`FR-44`). | Trung bình | [09. Nhắc thay](01-tinh-nang/09-nhac-thay.md) |
| `OPEN-07` | Hủy báo thay & Lý do trả về BK | Có bắt buộc nhập lý do khi hủy báo thay theo yêu cầu (`BR-YC-04`) không? Có lưu lịch sử nhiều lần trả về BK thay vì ghi đè (`FR-DBK-04`) không? | Trung bình | [02. Báo thay theo yêu cầu](01-tinh-nang/02-bao-thay-theo-yeu-cau.md), [05. Duyệt bảng kê](01-tinh-nang/05-duyet-bang-ke.md) |
| `OPEN-08` | Mobile Offline & Concurrency | Xử lý mất mạng ngoài hiện trường và xung đột dữ liệu giữa Web và Mobile App như thế nào? | Cao | [11. Mobile App hiện trường](01-tinh-nang/11-mobile-app-hien-truong.md) |
| `OPEN-09` | State Diagram Nhắc thay | Bổ sung lại sơ đồ trạng thái đúng của đối tượng Nhắc thay (V1.4 dán nhầm ảnh Báo thay). | Thấp | [00. Tổng quan](00-tong-quan.md) |
| `OPEN-10` | Ma trận phân quyền & API / NFR | Chốt CRUD Matrix theo phòng ban, đặc tả API tích hợp Billing/VPĐT và các ngưỡng NFR. | Cao | [1. Tổng quan](00-tong-quan.md), [2.2. API](04-tich-hop-api.md), [4.1. NFR](05-yeu-cau-phi-chuc-nang.md) |
