# 2.2. Đặc tả Tích hợp & API (External Interface Requirements)

> **Phiên bản:** `v1.0` · **Cập nhật:** 2026-11-17 · **Nguồn:** Baseline `SRS_ThayDHN_V1.4` (mục `1.4`, `3.2.1`, `4.2`, `4.6`)

> [!WARNING] Thiếu đặc tả ở V1.4 — Cần bổ sung chi tiết kỹ thuật
> Mục `1.4` của SRS V1.4 nêu phần mềm mới đồng bộ dữ liệu hai chiều với hệ thống hiện tại của Cấp nước Nhà Bè nhưng **chưa đặc tả endpoint, payload, cơ chế đồng bộ và xử lý lỗi**. Tài liệu này tổng hợp toàn bộ điểm giao tiếp cần chốt với team Dev/Hệ thống.

---

## 1. Bản đồ tích hợp hệ thống

Phần mềm Báo thay ĐHN giao tiếp với **3 hệ thống ngoài**:

| Hệ thống ngoài | Hướng dữ liệu | Mục đích tích hợp | Trạng thái trong V1.4 |
|---|---|---|---|
| **Văn phòng điện tử (VPĐT) / SSO** | VPĐT → Thay ĐHN | Xác thực đăng nhập và liên kết tài khoản người dùng (`3.2.1`) | Mới nêu API đăng nhập, thiếu token/role mapping |
| **Hệ thống Đọc số** | Đọc số ↔ Thay ĐHN | Đẩy danh bộ có code lỗi đầu 6 (`60, 61...`) kèm hình ảnh sang màn hình Duyệt báo thay bất thường (`4.2`) | Thiếu cơ chế đẩy (webhook/batch) & đồng bộ ngược khi hủy code |
| **Hệ thống Billing (Thu tiền & Danh bộ tập trung)** | Billing ↔ Thay ĐHN | Lấy danh bộ, ĐHN hiện tại, chỉ số cũ; đẩy kết quả thay ĐHN mới sau khi hoàn công/chốt bảng kê (`1.4`) | Thiếu hoàn toàn API spec, thời điểm sync & retry |

---

## 2. Chi tiết các luồng tích hợp cần đặc tả (`[TODO]`)

### 2.1. Đăng nhập & Phân quyền (VPĐT / Billing)
- **Giao thức / Xác thực:** JWT / OAuth2 / Session? Thời hạn token và cơ chế refresh token?
- **Mapping người dùng:** Tài khoản từ VPĐT đồng bộ sang Thay ĐHN có tự động gán Phòng (`QLĐHN 1/2`, `QLML 1/2`, `KTKS`, `QLĐH`, `BLĐ`) hay Admin cấu hình thủ công trong module Thay ĐHN?

### 2.2. Tiếp nhận & Phản hồi Code bất thường (Hệ thống Đọc số)
- **Đầu vào:** Khi nhân viên đọc số ghi code lỗi (`60, 61...`), dữ liệu truyền sang Thay ĐHN theo **Real-time** hay **Batch cuối ngày/cuối kỳ**?
- **Đồng bộ ngược:** Khi Phòng QLĐHN không duyệt hoặc hủy báo thay bất thường, hệ thống Thay ĐHN có bắn API cập nhật lại trạng thái / code bên Đọc số hay không?

### 2.3. Đồng bộ danh bộ & Kết quả hoàn công (Billing)
- **Lấy dữ liệu danh bộ:** Tìm kiếm danh bộ (`4.1.4`), lọc định kỳ (`4.3.3`) đọc trực tiếp DB Billing, qua API, hay đồng bộ về DB trung gian?
- **Đẩy kết quả thay ĐHN về Billing:**
  - Thời điểm đẩy: Ngay khi NV bấm hoàn công trên Mobile, khi QLML xác nhận/cập nhật trên Portal, hay chỉ sau khi **Chốt bảng kê** (`Hình 25`)?
  - Trường hợp **Hủy hoàn công** (`4.6`): Nếu trước đó đã đẩy sang Billing thì có gọi API rollback/hủy không?
  - **Fail-over / Retry:** Nếu API Billing timeout hoặc sập tại thời điểm đồng bộ, hệ thống lưu hàng đợi retry (Dead-letter queue / Job chạy lại) hay báo lỗi chặn thao tác của người dùng?

### 2.4. Thông báo (Push Notification — Mobile App)
- Khi QLML giao danh bộ (`BR-GNV-05`) hoặc khi Phòng chuyên môn duyệt trở ngại (`FR-40`), hệ thống có gửi Push Notification (FCM/APNs) xuống Mobile App của nhân viên hay nhân viên tự mở App kéo dữ liệu?

---

## 3. Tiêu chí nghiệm thu tích hợp (Acceptance Criteria)

- [ ] `AC-INT-01` *(TODO)*: Có tài liệu đặc tả đầy đủ API Contract (URL, Method, Request/Response JSON, Mã lỗi) cho 3 hệ thống VPĐT, Đọc số và Billing.
- [ ] `AC-INT-02` *(TODO)*: Khi API Billing tạm gián đoạn, thao tác hoàn công không bị mất dữ liệu và được đồng bộ lại thành công sau khi Billing hoạt động bình thường.
