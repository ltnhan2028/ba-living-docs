# 2.1. Quy tắc chung, Từ điển dữ liệu & Master Data

> **Phiên bản:** `v1.1` · **Cập nhật:** 2026-11-23 · **Nguồn:** Đồng bộ `v1.1` (`As-Is`) từ Baseline `SRS_ThayDHN_V1.4` + chuẩn ISO/IEC/IEEE 29148

---

## 1. Quy tắc vận hành dùng chung

- **Múi giờ:** `Asia/Ho_Chi_Minh` (UTC+7).
- **Bảo toàn lịch sử chỉ số:** Không ghi đè chỉ số đồng hồ cũ khi thay thế; luôn lưu vết cả thông tin đồng hồ gỡ và đồng hồ gắn.
- **Định dạng số bảng kê tự động (`FR-LBK-07`, `FR-44`):** `[STT gồm 4 chữ số][Viết tắt trường hợp thay]/[2 số cuối của năm lập BK]` (Ví dụ: `0001DK/26`, `0001YC/26`, `0001BT/26`, và bảng kê nhắc thay `0019N/26` — đã chốt tự sinh mã ở `TBD-06` / `DEC-05`, không nhập tay).
- **Giới hạn số dòng/bảng kê (`DEC-02`):** Tối đa **`300` danh bộ/bảng kê** (áp dụng thống nhất cho cả Lập bảng kê và Nhắc thay).
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
| **Trở ngại (`OBSTACLE`)** | Danh bộ, Loại trở ngại (**26 loại** phân tuyến 3 tab `DVKH`/`ĐHN`/`KTKS` — `DEC-04`), Ngày trở ngại, Lần trở ngại (tối đa 3), Ghi chú trở ngại, Ảnh (tối thiểu 1, tối đa 5), Kết quả xử lý (`0/250` ký tự) | Lưu lịch sử nhiều lần trở ngại như thế nào ở mức DB (`TBD-10`). |
| **Nhắc thay (`REMINDER`)** | Số BK nhắc thay (tự sinh `XXXXN/26` — `DEC-05`), Trễ hạn (> **30 ngày** từ ngày giao NV), Nguồn (`Trễ hạn` / `Trở ngại` / `Chốt BK chưa thay`) | Đồng bộ validation tối đa `300` dòng/BK trên modal Nhắc thay (`DEC-02`). |

---

## 3. Danh mục dùng chung (Master Data)

> [!WARNING] Thiếu đặc tả ở V1.4 — Phân loại Master Data tĩnh vs động
> Chưa xác định các danh mục dưới đây cố định trong code (static) hay có màn hình quản trị cấu hình động (dynamic) trên Web Portal.

- **Loại báo thay theo yêu cầu (22 loại):** Xem chi tiết tại [3.2. Báo thay theo yêu cầu](01-tinh-nang/02-bao-thay-theo-yeu-cau.md).
- **Loại trở ngại (26 loại — phân tuyến 3 tab `Phòng DVKH` / `Phòng ĐHN` / `Phòng KTKS`, chốt `DEC-04`):** Xem chi tiết tại [3.8. Xử lý trở ngại](01-tinh-nang/08-xu-ly-tro-ngai.md).
- **Hiệu ĐHN (20 hiệu), Cỡ ĐHN (14 cỡ), Danh mục vật tư (29 vật tư), 4 trạng thái kho vật tư (`DEC-03`):** Xem chi tiết tại [3.10. Import & Quản lý kho vật tư](01-tinh-nang/10-import-vat-tu.md) và [3.7. Hoàn công & Chốt bảng kê](01-tinh-nang/07-hoan-cong-va-chot-bang-ke.md).
- **Code đọc số bất thường (chốt `TBD-03` / `DEC-01`):** Chính xác **6 mã `60–65`** (không có mã `66`):
  - `60` — Ngưng
  - `61` — Kính mờ
  - `62` — Quay ngược, gắn ngược
  - `63` — Mờ mặt số, mất ĐHN
  - `64` — Gỡ co nối, khóa góc, tự nâng, hạ
  - `65` — Trở ngại thay

---

## 4. Liên kết các phần đặc tả hệ thống khác

- **Đặc tả Tích hợp & API:** [2.2. Đặc tả Tích hợp & API](04-tich-hop-api.md)
- **Yêu cầu phi chức năng (NFR):** [4.1. Yêu cầu phi chức năng](05-yeu-cau-phi-chuc-nang.md)
- **Tổng hợp điểm thiếu & mâu thuẫn V1.4:** [5.1. SRS V1.4 Gap Tracker](06-diem-thieu-va-mau-thuan.md)
