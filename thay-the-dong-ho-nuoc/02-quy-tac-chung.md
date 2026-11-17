# 02. Quy tắc dùng chung, Dữ liệu, Tích hợp & Yêu cầu phi chức năng

> **Phiên bản:** `v1.0` · **Cập nhật:** 2026-11-17 · **Nguồn:** Baseline `SRS_ThayDHN_V1.4` + Rà soát chuẩn IEEE 29148

---

## 1. Quy tắc vận hành dùng chung

- **Múi giờ:** `Asia/Ho_Chi_Minh` (UTC+7).
- **Bảo toàn lịch sử chỉ số:** Không ghi đè chỉ số đồng hồ cũ khi thay thế; luôn lưu vết cả thông tin đồng hồ gỡ và đồng hồ gắn.
- **Định dạng số bảng kê tự động (`FR-LBK-07`):** `[STT gồm 4 chữ số][Viết tắt trường hợp thay]/[2 số cuối của năm lập BK]` (Ví dụ: `0001DK/26`).
  - *Lưu ý:* Bảng kê nhắc thay trong V1.4 lại cho người dùng tự nhập (`FR-44`) — xem mục 5 bên dưới để đối chiếu.
- **Thứ tự sắp xếp mặc định:**
  - Danh sách báo thay / duyệt báo thay / trở ngại: Sắp xếp theo thời gian giảm dần (mới → cũ).
  - Danh sách lập bảng kê và giao nhân viên thay ĐHN (Web & Mobile): Sắp xếp theo **Mã lộ trình (MLT) tăng dần**.

---

## 2. Từ điển dữ liệu & Danh mục dùng chung (Data Dictionary & Master Data)

> [!WARNING] Thiếu đặc tả ở V1.4 — Data Dictionary & Master Data
> SRS V1.4 chưa định nghĩa kiểu dữ liệu, độ dài tối đa (`maxLength`), định dạng hợp lệ, và không phân rõ danh mục nào là **Master Data tĩnh** (hardcode) hay **Master Data động** (cho phép Admin cấu hình trên Web).

### 2.1. Khung thuộc tính cần bổ sung cho các thực thể chính

| Thực thể | Các trường đã có trong V1.4 | Điểm còn thiếu cần chốt với Dev/KH |
|---|---|---|
| **Báo thay (`REPORT`)** | Mã/Ngày báo thay, Danh bộ, MLT, Hợp đồng, Tên KH, Địa chỉ, Số BK thay gần nhất, Theo số, Hiệu, Cỡ, Số thân, Chỉ số báo, Chì thân, Chì góc, Vị trí, Loại báo thay, Tệp đính kèm (tối đa 5) | Kiểu/độ dài từng trường, quy tắc validate `Chỉ số báo` (số nguyên dương?), `Loại tệp` & `Dung lượng max/tệp`, cấu trúc sinh mã `Báo thay`. |
| **Bảng kê (`TABLE`)** | Số BK, Ngày BK, Phòng (`QLĐHN 1/2`), Tổ, Trường hợp thay (`Định kỳ`, `Theo yêu cầu`, `Bất thường`), Loại BK, Trạng thái, Ghi chú/Lý do trả về, Lý do hủy | Độ dài `Lý do trả về` / `Lý do hủy`, danh sách giá trị chính xác của `Tình trạng` bảng kê trên mọi màn hình, lưu lịch sử nhiều lần trả về thay vì ghi đè (`FR-DBK-04`). |
| **Hoàn công (`COMPLETION`)** | ĐHN gỡ (Số thân, Hiệu, Cỡ, Chỉ số gỡ...), ĐHN gắn (Số thân, Cỡ, Số giấy kiểm định, Hiệu, Chì góc, Chỉ số gắn, Ngày kiểm định), Vật tư sử dụng, Ảnh trước & sau hoàn công (tối thiểu 1 trước + 1 sau, tối đa 5) | Quy tắc validate `Chỉ số gỡ` so với chỉ số kỳ trước, `Chỉ số gắn` (có cho phép ≠ 0 không?), ràng buộc danh mục vật tư đã import, kích thước/định dạng ảnh. |
| **Trở ngại (`OBSTACLE`)** | Danh bộ, Loại trở ngại (1–10), Ngày trở ngại, Lần trở ngại (tối đa 3), Ghi chú trở ngại, Ảnh (tối đa 5) | Bắt buộc nhập ghi chú/ảnh khi báo trở ngại ở Mobile hay không? Lưu lịch sử nhiều lần trở ngại như thế nào? |
| **Nhắc thay (`REMINDER`)** | Số BK nhắc thay (nhập tay), Số kỳ trễ hạn, Nguồn (`Trễ hạn` / `Trở ngại`) | Định nghĩa tham số `1 kỳ = ? ngày/tháng`, rule chống trùng `Số BK nhắc thay`. |

### 2.2. Danh mục chuẩn đã ghi nhận trong V1.4

- **Loại báo thay theo yêu cầu (22 loại):** Xem bảng tại [02. Báo thay theo yêu cầu](01-tinh-nang/02-bao-thay-theo-yeu-cau.md#32-danh-mục-22-loại-báo-thay-theo-yêu-cầu).
- **Loại trở ngại (10 loại):** Xem bảng tại [08. Xử lý trở ngại](01-tinh-nang/08-xu-ly-tro-ngai.md#32-danh-mục-10-loại-trở-ngại).
- **Code đọc số bất thường:**

> [!CAUTION] Mâu thuẫn nội tại ở V1.4 — Danh sách Code bất thường
> - Mục `4.2.3` và `4.8.3` chỉ liệt kê `60` (ĐHN ngưng) và `61` (Kính mờ).
> - Mục `4.3.3` liệt kê `60, 61, 62, 63, 64, 66`.
> - `BR-BT-01` ghi *"Code đầu 6 (ví dụ 60, 61,...)"*.
> Cần chốt danh sách Code chuẩn và tên hiển thị tương ứng.

---

## 3. Đặc tả Tích hợp / API (External Interface Specification)

> [!WARNING] Thiếu đặc tả ở V1.4 — Giao tiếp hệ thống ngoài
> Mục `1.4` nêu hệ thống đồng bộ với **Billing**, **Hệ thống Đọc số** và **Văn phòng điện tử (SSO)** nhưng chưa có đặc tả kỹ thuật:
> 1. **API Đăng nhập (VPĐT / Billing):** Cơ chế token (JWT/OAuth2?), mapping quyền user vào `QLĐHN 1/2`, `QLML 1/2`, `KTKS`, `QLĐH`, `BLĐ`.
> 2. **Đồng bộ từ Đọc số → Thay ĐHN:** Cơ chế real-time webhook hay batch cuối ngày? Khi QLĐHN không duyệt/hủy code lỗi thì có bắn API cập nhật ngược về hệ thống Đọc số không?
> 3. **Đồng bộ từ Thay ĐHN → Billing (khi Hoàn công / Chốt BK):** Sync tại thời điểm NV bấm hoàn công, hay khi QLML chốt bảng kê? Nếu API Billing lỗi/timeout thì retry hay rollback thế nào?

---

## 4. Yêu cầu phi chức năng (Non-Functional Requirements — NFR)

> [!WARNING] Thiếu 100% ở V1.4
> Bảng lịch sử V1.2 của file gốc ghi *"Thêm Non-Functional Requirement"*, nhưng toàn bộ nội dung mục NFR không tồn tại trong bản V1.4. Cần bổ sung các chỉ số sau để Dev/QA nghiệm thu:

| Nhóm NFR | Hạng mục cần định nghĩa | Trạng thái |
|---|---|---|
| **Hiệu năng (Performance)** | Thời gian phản hồi tìm kiếm/load bảng kê (tối đa 250 dòng/BK), thời gian xuất Excel thống kê vật tư. | `[TODO]` |
| **Tải đồng thời (Concurrency)** | Số lượng NV thi công Mobile + user Web truy cập đồng thời tại giờ cao điểm; xử lý xung đột khi Web hủy/trả về đúng lúc Mobile đang gửi hoàn công. | `[TODO]` |
| **Mobile Offline & Mạng yếu** | Cơ chế lưu nháp cục bộ (local storage) ảnh & thông tin hoàn công khi mất mạng 4G ở hầm/hẻm sâu và tự động đồng bộ lại khi có mạng. | `[TODO]` |
| **Lưu trữ & Hình ảnh** | Dung lượng tối đa mỗi ảnh, chuẩn nén ảnh trước khi upload từ Mobile, thời gian lưu trữ ảnh hoàn công/trở ngại. | `[TODO]` |
| **Bảo mật & Audit Trail** | Mã hóa truyền tải (HTTPS), phân quyền dữ liệu theo phòng ban/khu vực, log thao tác chi tiết (`Ai`, `Lúc nào`, `Thao tác gì`, `Trước/Sau`, `Lý do`). | `[TODO]` |

---

## 5. Tổng hợp các điểm thiếu & mâu thuẫn của SRS V1.4 (Action List)

Bảng này tổng hợp toàn bộ khoảng trống cần rà soát khi đối chiếu `v1.0` với **phần mềm hiện tại (`v1.x`)**:

| Mã vấn đề | Nhóm / Module | Nội dung thiếu hoặc mâu thuẫn | Tham chiếu |
|---|---|---|---|
| `GAP-01` | Tổng quan / RBAC | Thiếu Ma trận phân quyền chi tiết giữa các phòng & khu vực | [00. Tổng quan](00-tong-quan.md#42-ma-trận-phân-quyền-tổng-hợp-crud-matrix) |
| `GAP-02` | State Diagram | Mục `3.5.4` dán nhầm ảnh của Báo thay; nhánh `ChuaDuyet → Huy` ghi nhầm `"BLĐ trả về"` | [00. Tổng quan](00-tong-quan.md#53-vòng-đời-trạng-thái-các-đối-tượng-state-diagrams) |
| `GAP-03` | Đăng nhập & Dashboard | Thiếu hoàn toàn BR, FR, AC, chỉ số Dashboard, cấu trúc Nhật ký hoạt động | [01. Đăng nhập & Dashboard](01-tinh-nang/01-dang-nhap-va-dashboard.md) |
| `GAP-04` | Báo thay theo yêu cầu | `BR-YC-04` không bắt nhập lý do hủy; `BR-YC-03` viết phủ định; chưa có BR xử lý trùng báo thay định kỳ | [02. Báo thay theo yêu cầu](01-tinh-nang/02-bao-thay-theo-yeu-cau.md) |
| `GAP-05` | Báo thay bất thường | Mâu thuẫn danh sách Code (`60, 61` vs `60, 61, 62, 63, 64, 66`) | [03. Duyệt BT bất thường](01-tinh-nang/03-duyet-bao-thay-bat-thuong.md) |
| `GAP-06` | Lập bảng kê | `FR-LBK-04` bắt chọn *Công thức tính, Năm* nhưng bảng UI `4.3.3` không có; thiếu công thức lọc định kỳ & mẫu In | [04. Lập & theo dõi BK](01-tinh-nang/04-lap-va-theo-doi-bang-ke.md) |
| `GAP-07` | Duyệt bảng kê | `FR-DBK-04` ghi đè ghi chú làm mất lịch sử trả về; chưa rõ 1 cấp hay 2 cấp duyệt | [05. Duyệt bảng kê](01-tinh-nang/05-duyet-bang-ke.md) |
| `GAP-08` | Giao NV thay | `BR-GNV-03` hard-code địa bàn Q4/Q7/Nhà Bè; thiếu luồng đổi/thu hồi phân công | [06. Giao NV thay ĐHN](01-tinh-nang/06-giao-nhan-vien-thay.md) |
| `GAP-09` | Hoàn công & Chốt BK | Thiếu hoàn toàn BR/FR/AC cho **Chốt bảng kê** và **Thống kê vật tư**; mâu thuẫn bắt buộc nhập ĐHN gỡ | [07. Hoàn công & Chốt BK](01-tinh-nang/07-hoan-cong-va-chot-bang-ke.md) |
| `GAP-10` | Xử lý trở ngại | **Mâu thuẫn nghiêm trọng:** `BR-29` (loại 1,2,3 → Nhắc thay) vs `4.7.1 & BR-37` (loại 1,2,3 → Hủy, không Nhắc thay) | [08. Xử lý trở ngại](01-tinh-nang/08-xu-ly-tro-ngai.md) |
| `GAP-11` | Nhắc thay | Thiếu định nghĩa "1 kỳ" trong `BR-36`; `FR-44` nhập tay số BK không check trùng | [09. Nhắc thay](01-tinh-nang/09-nhac-thay.md) |
| `GAP-12` | Import vật tư | Có trong bảng chức năng `2.1` nhưng **trống 100%** đặc tả | [10. Import vật tư](01-tinh-nang/10-import-vat-tu.md) |
| `GAP-13` | Mobile App | Thiếu hoàn toàn BR, FR, AC, Offline Mode, nén ảnh & xử lý xung đột | [11. Mobile App hiện trường](01-tinh-nang/11-mobile-app-hien-truong.md) |
| `GAP-14` | Toàn bộ 11 tính năng | Thiếu 100% **Acceptance Criteria (AC)** kiểm thử được & **NFR / API Spec** | Toàn bộ mục `01-tinh-nang/` |
