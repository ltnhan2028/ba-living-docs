# 4.1. Yêu cầu phi chức năng (Non-Functional Requirements — NFR)

> **Phiên bản:** `v1.0` · **Cập nhật:** 2026-11-17 · **Nguồn:** Rà soát chuẩn ISO/IEC/IEEE 29148 & ISO 25010

> [!WARNING] Thiếu 100% ở SRS V1.4 (`GAP-14`)
> Bảng lịch sử phiên bản `v1.2` trong `SRS_ThayDHN_V1.4.docx` có ghi *"Thêm Non-Functional Requirement"*, nhưng toàn bộ nội dung NFR không có trong tài liệu V1.4. Chương này tạo khung chuẩn để bổ sung các ngưỡng nghiệm thu kỹ thuật với Dev/QA và Khách hàng.

---

## 1. Hiệu năng & Khả năng đáp ứng (Performance)

| Mã | Hạng mục | Chỉ tiêu cần chốt `[TODO]` |
|---|---|---|
| `NFR-PERF-01` | Thời gian tải danh sách & tìm kiếm (Web Portal) | Thời gian phản hồi truy vấn danh bộ, báo thay, bảng kê (tối đa 250 dòng/BK) ≤ `...` giây. |
| `NFR-PERF-02` | Chia bảng kê & Xuất Excel | Thời gian chia nhiều bảng kê (vd: 1.000+ danh bộ) và xuất Excel Thống kê vật tư ≤ `...` giây. |
| `NFR-PERF-03` | Tải & đồng bộ trên Mobile App | Thời gian tải danh sách được giao và gửi hoàn công (gồm tối đa 5 ảnh) trên mạng 4G ≤ `...` giây. |

---

## 2. Tải đồng thời & Xung đột dữ liệu (Concurrency)

| Mã | Hạng mục | Yêu cầu cần chốt `[TODO]` |
|---|---|---|
| `NFR-CONC-01` | Số lượng người dùng đồng thời | Hệ thống đáp ứng tối thiểu `...` user Web và `...` nhân viên Mobile truy cập đồng thời giờ cao điểm. |
| `NFR-CONC-02` | Chống tạo trùng báo thay (`BR-YC-02`) | Khi 2 nhân viên tạo báo thay cho cùng 1 danh bộ tại cùng một thời điểm, DB/API phải khóa giao dịch (lock/unique constraint) để không phát sinh 2 báo thay song song. |
| `NFR-CONC-03` | Xung đột Web vs Mobile | Quy tắc xử lý khi Web hủy bảng kê / đổi phân công đúng lúc Mobile của nhân viên cũ vừa bấm hoàn công hoặc đồng bộ dữ liệu offline (`OPEN-08`). |

---

## 3. Hoạt động ngoại tuyến (Mobile Offline Mode)

| Mã | Hạng mục | Yêu cầu cần chốt `[TODO]` |
|---|---|---|
| `NFR-OFF-01` | Lưu nháp khi mất mạng | Khi nhân viên thi công ở khu vực mất 4G (hẻm sâu, tầng hầm), App có lưu tạm thông tin hoàn công/trở ngại + ảnh trên máy hay không? |
| `NFR-OFF-02` | Tự động đồng bộ khi có mạng | Cơ chế hàng đợi đồng bộ lại (auto-sync / manual retry) và xử lý thông báo nếu lệnh thi công đã thay đổi trạng thái trên server. |

---

## 4. Hình ảnh & Lưu trữ (Media & Storage)

| Mã | Hạng mục | Chỉ tiêu cần chốt `[TODO]` |
|---|---|---|
| `NFR-STR-01` | Định dạng & Dung lượng tệp | Định dạng ảnh/tệp cho phép (`JPG`, `PNG`, `HEIC`, `PDF`...); dung lượng tối đa mỗi tệp khi upload trên Web (`FR-YC-08`) và Mobile (`5.3`, `5.4`). |
| `NFR-STR-02` | Nén ảnh & Đóng dấu (Watermark) | Mobile App có tự nén ảnh trước khi upload không? Có gắn watermark thời gian/tọa độ GPS lên ảnh hiện trường không? |
| `NFR-STR-03` | Thời gian lưu trữ | Lưu trữ ảnh hoàn công/trở ngại và hồ sơ lịch sử tối thiểu `...` năm; giải pháp lưu trữ (Local server / Object storage). |

---

## 5. Bảo mật & Truy vết (Security & Auditability)

| Mã | Hạng mục | Yêu cầu cần chốt `[TODO]` |
|---|---|---|
| `NFR-SEC-01` | Phân quyền & Cách ly dữ liệu | Kiểm tra phân quyền trên cả UI lẫn API backend theo vai trò và phạm vi phòng ban (`QLĐHN 1/2`, `QLML 1/2`). |
| `NFR-SEC-02` | Bảo mật truyền tải & Thông tin KH | Toàn bộ API sử dụng HTTPS/TLS; bảo vệ thông tin cá nhân khách hàng (`Tên KH`, `Địa chỉ`, `Số HĐ`). |
| `NFR-AUD-01` | Nhật ký truy vết (Audit Trail) | Mọi thao tác tạo, sửa, duyệt, trả về, hủy, hoàn công, hủy hoàn công, chốt bảng kê phải ghi nhận: `User`, `Timestamp (UTC+7)`, `Action`, `Giá trị cũ → mới`, `Lý do`. |
