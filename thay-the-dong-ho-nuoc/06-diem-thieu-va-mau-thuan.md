# 5.1. Tổng hợp điểm thiếu & mâu thuẫn (SRS V1.4 Gap Tracker)

> **Phiên bản:** `v1.0` · **Cập nhật:** 2026-11-17 · **Mục đích:** Danh sách kiểm tra (Action List) để đối chiếu bản ký hợp đồng `SRS_ThayDHN_V1.4` với phần mềm đang vận hành (`v1.x`) và chuẩn bị cho Phase nâng cấp (`v2.0`).

---

## 1. Bảng tổng hợp 14 khoảng trống & mâu thuẫn (`GAP-01` → `GAP-14`)

| Mã | Nhóm / Module | Nội dung thiếu hoặc mâu thuẫn | Mức độ | Tài liệu liên quan |
|---|---|---|---|---|
| `GAP-01` | Tổng quan / RBAC | Thiếu Ma trận phân quyền chi tiết giữa các phòng (`QLĐHN 1/2`, `QLML 1/2`, `KTKS`, `QLĐH`, `BLĐ`, `Admin`) | Cao | [1. Tổng quan](00-tong-quan.md#42-ma-trận-phân-quyền-tổng-hợp-crud-matrix) |
| `GAP-02` | State Diagram | Mục `3.5.4` dán nhầm ảnh của Báo thay; nhánh `ChuaDuyet → Huy` ghi nhầm `"BLĐ trả về"` | Thấp | [1. Tổng quan](00-tong-quan.md#53-vòng-đời-trạng-thái-các-đối-tượng-state-diagrams) |
| `GAP-03` | Đăng nhập & Dashboard | Thiếu hoàn toàn `BR`, `FR`, `AC`, chỉ số KPI Dashboard, cấu trúc màn hình Nhật ký hoạt động | Cao | [3.1. Đăng nhập & Dashboard](01-tinh-nang/01-dang-nhap-va-dashboard.md) |
| `GAP-04` | Báo thay theo yêu cầu | `BR-YC-04` không bắt nhập lý do hủy; `BR-YC-03` viết phủ định; chưa có `BR` xử lý trùng báo thay định kỳ | Trung bình | [3.2. Báo thay theo yêu cầu](01-tinh-nang/02-bao-thay-theo-yeu-cau.md) |
| `GAP-05` | Báo thay bất thường | Mâu thuẫn danh sách Code (`60, 61` ở `4.2.3/4.8.3` vs `60, 61, 62, 63, 64, 66` ở `4.3.3`) | Cao | [3.3. Duyệt BT bất thường](01-tinh-nang/03-duyet-bao-thay-bat-thuong.md) |
| `GAP-06` | Lập bảng kê | `FR-LBK-04` bắt chọn *Công thức tính, Năm* nhưng bảng UI `4.3.3` không có; thiếu công thức lọc định kỳ & mẫu In bảng kê | Trung bình | [3.4. Lập & theo dõi BK](01-tinh-nang/04-lap-va-theo-doi-bang-ke.md) |
| `GAP-07` | Duyệt bảng kê | `FR-DBK-04` ghi đè ghi chú làm mất lịch sử trả về; chưa rõ 1 cấp hay 2 cấp duyệt; trạng thái `Trả về` vs `Chưa duyệt` | Trung bình | [3.5. Duyệt bảng kê](01-tinh-nang/05-duyet-bang-ke.md) |
| `GAP-08` | Giao NV thay | `BR-GNV-03` gắn cứng địa bàn Q4/Q7/Nhà Bè; thiếu luồng đổi/thu hồi phân công | Trung bình | [3.6. Giao NV thay ĐHN](01-tinh-nang/06-giao-nhan-vien-thay.md) |
| `GAP-09` | Hoàn công & Chốt BK | Thiếu hoàn toàn `BR/FR/AC` cho **Chốt bảng kê** và **Thống kê vật tư**; mâu thuẫn bắt buộc nhập ĐHN gỡ (`BR-27` vs `5.3`) | Cao | [3.7. Hoàn công & Chốt BK](01-tinh-nang/07-hoan-cong-va-chot-bang-ke.md) |
| `GAP-10` | Xử lý trở ngại | **Mâu thuẫn nghiêm trọng:** `BR-29` (loại 1,2,3 → Nhắc thay) vs `4.7.1 & BR-37` (loại 1,2,3 → Hủy, không Nhắc thay) | Rất cao | [3.8. Xử lý trở ngại](01-tinh-nang/08-xu-ly-tro-ngai.md) |
| `GAP-11` | Nhắc thay | Thiếu định nghĩa tham số `"1 kỳ"` trong `BR-36`; `FR-44` nhập tay số BK không có rule chống trùng | Trung bình | [3.9. Nhắc thay](01-tinh-nang/09-nhac-thay.md) |
| `GAP-12` | Import vật tư | Có tên trong Bảng `2.1` nhưng **trống 100%** đặc tả | Cao | [3.10. Import vật tư](01-tinh-nang/10-import-vat-tu.md) |
| `GAP-13` | Mobile App | Thiếu hoàn toàn `BR`, `FR`, `AC`, Offline Mode, nén ảnh & xử lý xung đột | Cao | [3.11. Mobile App hiện trường](01-tinh-nang/11-mobile-app-hien-truong.md) |
| `GAP-14` | Chuẩn hệ thống | Thiếu 100% **Acceptance Criteria (`AC`)**, **Data Dictionary**, **API Spec** và **NFR** | Cao | [2.1. Dữ liệu](02-quy-tac-chung.md), [2.2. API](04-tich-hop-api.md), [4.1. NFR](05-yeu-cau-phi-chuc-nang.md) |

---

## 2. Lỗi biên tập đã hiệu chỉnh khi chuyển thể từ V1.4
- Mục `1.3 Phạm vi` trong V1.4 ghi nhầm *"phạm vi triển khai của phần mềm quản lý thu tiền"* → đã sửa thành *phần mềm báo thay đồng hồ nước*.
- Mục `II. Khái quát tài liệu` giới thiệu chia làm *4 phần* nhưng thực tế có *6 chương* → đã chuẩn hóa thành **5 chương theo chuẩn ISO/IEC/IEEE 29148**.
- Mã `BR-YC-0` trong bảng `4.1.3` (thiếu số 7) → đã chuẩn hóa thành `BR-YC-07`.
