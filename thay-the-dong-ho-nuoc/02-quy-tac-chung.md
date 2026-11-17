# 2.1. Quy tắc chung, Từ điển dữ liệu & Master Data

> **Phiên bản:** `v1.0` · **Cập nhật:** 2026-11-17 · **Nguồn:** Baseline `SRS_ThayDHN_V1.4` + Rà soát chuẩn IEEE 29148

---

## 1. Quy tắc vận hành dùng chung

- **Múi giờ:** `Asia/Ho_Chi_Minh` (UTC+7).
- **Bảo toàn lịch sử chỉ số:** Không ghi đè chỉ số đồng hồ cũ khi thay thế; luôn lưu vết cả thông tin đồng hồ gỡ và đồng hồ gắn.
- **Định dạng số bảng kê tự động (`FR-LBK-07`):** `[STT gồm 4 chữ số][Viết tắt trường hợp thay]/[2 số cuối của năm lập BK]` (Ví dụ: `0001DK/26`).
  - *Lưu ý:* Bảng kê nhắc thay trong V1.4 lại cho người dùng tự nhập (`FR-44`) — xem `GAP-11` tại [5.1. Tổng hợp điểm thiếu & mâu thuẫn](06-diem-thieu-va-mau-thuan.md).
- **Thứ tự sắp xếp mặc định:**
  - Danh sách báo thay / duyệt báo thay / trở ngại: Sắp xếp theo thời gian giảm dần (mới → cũ).
  - Danh sách lập bảng kê và giao nhân viên thay ĐHN (Web & Mobile): Sắp xếp theo **Mã lộ trình (MLT) tăng dần**.

---

## 2. Từ điển dữ liệu (Data Dictionary)

> [!WARNING] Thiếu đặc tả ở V1.4 — Data Dictionary
> SRS V1.4 mới chỉ liệt kê tên trường và kiểu control giao diện (`Textbox`, `Dropdown`), chưa định nghĩa kiểu dữ liệu, độ dài tối đa (`maxLength`), định dạng/regex hợp lệ và ràng buộc DB.

| Thực thể | Các trường đã có trong V1.4 | Điểm còn thiếu cần chốt với Dev/KH `[TODO]` |
|---|---|---|
| **Báo thay (`REPORT`)** | Mã/Ngày báo thay, Danh bộ, MLT, Hợp đồng, Tên KH, Địa chỉ, Số BK thay gần nhất, Theo số, Hiệu, Cỡ, Số thân, Chỉ số báo, Chì thân, Chì góc, Vị trí, Loại báo thay, Tệp đính kèm (tối đa 5) | Kiểu/độ dài từng trường, quy tắc validate `Chỉ số báo` (số nguyên dương?), `Loại tệp` & `Dung lượng max/tệp`, cấu trúc sinh mã `Báo thay`. |
| **Bảng kê (`TABLE`)** | Số BK, Ngày BK, Phòng (`QLĐHN 1/2`), Tổ, Trường hợp thay (`Định kỳ`, `Theo yêu cầu`, `Bất thường`), Loại BK, Trạng thái, Ghi chú/Lý do trả về, Lý do hủy | Độ dài `Lý do trả về` / `Lý do hủy`, danh sách giá trị chính xác của `Tình trạng` bảng kê trên mọi màn hình, lưu lịch sử nhiều lần trả về thay vì ghi đè (`FR-DBK-04`). |
| **Hoàn công (`COMPLETION`)** | ĐHN gỡ (Số thân, Hiệu, Cỡ, Chỉ số gỡ...), ĐHN gắn (Số thân, Cỡ, Số giấy kiểm định, Hiệu, Chì góc, Chỉ số gắn, Ngày kiểm định), Vật tư sử dụng, Ảnh trước & sau hoàn công (tối thiểu 1 trước + 1 sau, tối đa 5) | Quy tắc validate `Chỉ số gỡ` so với chỉ số kỳ trước, `Chỉ số gắn` (có cho phép ≠ 0 không?), ràng buộc danh mục vật tư đã import, kích thước/định dạng ảnh. |
| **Trở ngại (`OBSTACLE`)** | Danh bộ, Loại trở ngại (1–10), Ngày trở ngại, Lần trở ngại (tối đa 3), Ghi chú trở ngại, Ảnh (tối đa 5) | Bắt buộc nhập ghi chú/ảnh khi báo trở ngại ở Mobile hay không? Lưu lịch sử nhiều lần trở ngại như thế nào? |
| **Nhắc thay (`REMINDER`)** | Số BK nhắc thay (nhập tay), Số kỳ trễ hạn, Nguồn (`Trễ hạn` / `Trở ngại`) | Định nghĩa tham số `1 kỳ = ? ngày/tháng`, rule chống trùng `Số BK nhắc thay`. |

---

## 3. Danh mục dùng chung (Master Data)

> [!WARNING] Thiếu đặc tả ở V1.4 — Phân loại Master Data tĩnh vs động
> Chưa xác định các danh mục dưới đây cố định trong code (static) hay có màn hình quản trị cấu hình động (dynamic) trên Web Portal.

- **Loại báo thay theo yêu cầu (22 loại):** Xem chi tiết tại [3.2. Báo thay theo yêu cầu](01-tinh-nang/02-bao-thay-theo-yeu-cau.md#32-danh-mục-22-loại-báo-thay-theo-yêu-cầu).
- **Loại trở ngại (10 loại):** Xem chi tiết tại [3.8. Xử lý trở ngại](01-tinh-nang/08-xu-ly-tro-ngai.md#32-danh-mục-10-loại-trở-ngại).
- **Hiệu ĐHN, Cỡ ĐHN, Vị trí lắp đặt, Danh mục vật tư:** Được dùng trong popup tạo báo thay (`4.1.4`), lập bảng kê (`4.3.3`) và hoàn công (`4.6.4`, `5.3`).
- **Code đọc số bất thường:**

> [!CAUTION] Mâu thuẫn nội tại ở V1.4 — Danh sách Code bất thường (`OPEN-03`)
> - Mục `4.2.3` và `4.8.3` chỉ liệt kê `60` (ĐHN ngưng) và `61` (Kính mờ).
> - Mục `4.3.3` liệt kê `60, 61, 62, 63, 64, 66`.
> - `BR-BT-01` ghi *"Code đầu 6 (ví dụ 60, 61,...)"*.
> Cần chốt danh sách Code chuẩn và tên hiển thị tương ứng.

---

## 4. Liên kết các phần đặc tả hệ thống khác

- **Đặc tả Tích hợp & API:** [2.2. Đặc tả Tích hợp & API](04-tich-hop-api.md)
- **Yêu cầu phi chức năng (NFR):** [4.1. Yêu cầu phi chức năng](05-yeu-cau-phi-chuc-nang.md)
- **Tổng hợp điểm thiếu & mâu thuẫn V1.4:** [5.1. SRS V1.4 Gap Tracker](06-diem-thieu-va-mau-thuan.md)
