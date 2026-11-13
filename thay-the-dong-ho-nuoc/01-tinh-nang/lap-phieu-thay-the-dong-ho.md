# Lập phiếu & thay thế đồng hồ nước

> **Phiên bản hiện tại:** `v0.1` · **Cập nhật lần cuối:** 2026-11-13 · **Trạng thái:** Bản nháp khởi tạo

## 1. Mục tiêu & Luồng nghiệp vụ (Flow)

- **Người dùng liên quan:** Điều phối viên, Nhân viên kỹ thuật
- **Luồng chính:**
  1. Điều phối viên tạo phiếu thay thế đồng hồ cho điểm dùng nước và gán Nhân viên kỹ thuật.
  2. Tại hiện trường, Nhân viên kỹ thuật chụp ảnh & ghi nhận **chỉ số cuối của đồng hồ cũ** trước khi tháo.
  3. Nhân viên kỹ thuật lắp đồng hồ mới, nhập **mã serial mới**, **chỉ số ban đầu**, chụp ảnh nghiệm thu và hoàn tất phiếu.
- **Ngoại lệ / Trường hợp lỗi:**
  - *(Chờ bổ sung: đồng hồ cũ bị mờ/không đọc được chỉ số, khách hàng vắng nhà, thay đổi vật tư phát sinh...)*

## 2. Quy tắc nghiệp vụ (Business Rules)

| Mã | Quy tắc | Ghi chú / Nguồn |
|---|---|---|
| `BR-01` | Bắt buộc ghi nhận đồng thời **chỉ số chốt đồng hồ cũ** và **chỉ số đầu đồng hồ mới** trước khi hoàn tất phiếu | Khởi tạo khung v0.1 |
| `BR-02` | Đồng hồ cũ sau khi thay thế phải chuyển trạng thái lịch sử (`Đã thu hồi / Thay thế`), không được gán trùng cho điểm dùng nước khác | Khởi tạo khung v0.1 |

## 3. Tiêu chí nghiệm thu (Acceptance Criteria)

- [ ] `AC-01`: Phiếu thay thế lưu đủ thông tin và ảnh chụp của cả đồng hồ cũ lẫn đồng hồ mới.
- [ ] `AC-02`: Hệ thống cập nhật mã đồng hồ hiện hành của điểm dùng nước sang đồng hồ mới sau khi hoàn tất phiếu.

## 4. Giao diện (UI & Ảnh chụp màn hình)

> Dán `Ctrl+V` trực tiếp trên GitBook hoặc thả ảnh vào `.gitbook/assets/` để bổ sung màn hình giao diện.

## 5. Lịch sử thay đổi (Version History)

| Phiên bản | Ngày | Người chốt | Tóm tắt thay đổi |
|---|---|---|---|
| `v0.1` | 2026-11-13 | Lê Nhân | Khởi tạo khung đặc tả dự án Thay thế đồng hồ nước |
