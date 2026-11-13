# Tiếp nhận & gắn đồng hồ nước

> **Phiên bản hiện tại:** `v0.1` · **Cập nhật lần cuối:** 2026-11-13 · **Trạng thái:** Bản nháp khởi tạo

## 1. Mục tiêu & Luồng nghiệp vụ (Flow)

- **Người dùng liên quan:** Điều phối viên, Nhân viên kỹ thuật
- **Luồng chính:**
  1. Điều phối viên tạo/tiếp nhận phiếu yêu cầu gắn hoặc hiệu chỉnh đồng hồ nước và gán cho Nhân viên kỹ thuật.
  2. Nhân viên kỹ thuật đến hiện trường, kiểm tra vị trí, thực hiện gắn mới hoặc hiệu chỉnh đồng hồ.
  3. Nhân viên kỹ thuật nhập thông tin đồng hồ (mã serial, cỡ đồng hồ, chỉ số ban đầu/sau hiệu chỉnh), chụp ảnh hiện trường và gửi hoàn tất phiếu.
- **Ngoại lệ / Trường hợp lỗi:**
  - *(Chờ bổ sung: không liên hệ được khách hàng, vị trí không đủ điều kiện thi công, đồng hồ lỗi...)*

## 2. Quy tắc nghiệp vụ (Business Rules)

| Mã | Quy tắc | Ghi chú / Nguồn |
|---|---|---|
| `BR-01` | Mỗi phiếu hoàn tất bắt buộc có **mã serial đồng hồ**, **chỉ số** và **ảnh chụp nghiệm thu** | Khởi tạo khung v0.1 |

## 3. Tiêu chí nghiệm thu (Acceptance Criteria)

- [ ] `AC-01`: Điều phối viên tạo phiếu và phân công được cho đúng nhân viên kỹ thuật.
- [ ] `AC-02`: Nhân viên kỹ thuật ghi nhận đầy đủ thông số, ảnh chụp và cập nhật trạng thái phiếu hoàn tất.

## 4. Giao diện (UI & Ảnh chụp màn hình)

> Dán `Ctrl+V` trực tiếp trên GitBook hoặc thả ảnh vào `.gitbook/assets/` để bổ sung màn hình giao diện.

## 5. Lịch sử thay đổi (Version History)

| Phiên bản | Ngày | Người chốt | Tóm tắt thay đổi |
|---|---|---|---|
| `v0.1` | 2026-11-13 | Lê Nhân | Khởi tạo khung đặc tả dự án Gắn và hiệu chỉnh đồng hồ nước |
