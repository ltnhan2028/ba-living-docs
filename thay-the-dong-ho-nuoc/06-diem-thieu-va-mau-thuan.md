# 5.1. Tổng hợp điểm thiếu & mâu thuẫn (SRS V1.4 Gap Tracker)

> **Phiên bản:** `v1.1` · **Cập nhật:** 2026-11-23 · **Mục đích:** Theo dõi trạng thái giải quyết 14 khoảng trống & mâu thuẫn từ bản Baseline `SRS_ThayDHN_V1.4` (`v1.0`) sau đợt khảo sát thực tế phần mềm hiện tại (`v1.1`).

---

## 1. Bảng tổng hợp 14 khoảng trống & mâu thuẫn (`GAP-01` → `GAP-14`)

| Mã | Nhóm / Module | Nội dung thiếu hoặc mâu thuẫn (từ V1.4) | Trạng thái (`v1.1`) | Kết quả xử lý ở `v1.1` | Tài liệu liên quan |
|---|---|---|---|---|---|
| `GAP-01` | Tổng quan / RBAC | Thiếu Ma trận phân quyền chi tiết giữa các phòng | ⏳ Còn mở | Tiếp tục hoàn thiện ở `TBD-10` | [1. Tổng quan](00-tong-quan.md) |
| `GAP-02` | State Diagram | Mục `3.5.4` dán nhầm ảnh của Báo thay | ⏳ Còn mở | Cần vẽ lại sơ đồ trạng thái Nhắc thay (`TBD-09`) | [1. Tổng quan](00-tong-quan.md) |
| `GAP-03` | Đăng nhập & Dashboard | Thiếu KPI Dashboard, bộ lọc, `BR/FR/AC`, màn Nhật ký | ✅ **Đã giải quyết** | Đã bổ sung đủ đặc tả Dashboard (`/dashboard`); chuyển giao diện `Nhật ký hoạt động` sang **Roadmap `v2.0`** (`RM-01`) | [3.1. Dashboard](01-tinh-nang/01-dang-nhap-va-dashboard.md) |
| `GAP-04` | Báo thay theo yêu cầu | Thiếu `BR` trùng báo thay định kỳ; `BR-YC-04` không bắt lý do | ✅ **Đã giải quyết** | Bổ sung `BR-YC-13` (tạo đè Định kỳ → tự `Hủy` dòng cũ), `BR-YC-14` (bắt buộc ảnh duyệt), `BR-YC-15` (`Trả về`) | [3.2. Báo thay YC](01-tinh-nang/02-bao-thay-theo-yeu-cau.md) |
| `GAP-05` | Báo thay bất thường | Mâu thuẫn danh sách Code (`60, 61` vs `60..64, 66`) | ✅ **Đã đóng** | Chốt chính xác **6 mã `60–65`**, không có `66` (`TBD-03` / `DEC-01`) | [3.3. Duyệt BT bất thường](01-tinh-nang/03-duyet-bao-thay-bat-thuong.md) |
| `GAP-06` | Lập bảng kê | Lệch `FR-LBK-04` vs UI; thiếu luồng sửa BK trả về & rút danh bộ | ✅ **Đã giải quyết** | Xác nhận đủ bộ lọc `FR-LBK-04`, bổ sung `Chờ gửi`/`Hủy gửi duyệt`, rút từng danh bộ & nâng `300` dòng/BK (`DEC-02`) | [3.4. Lập & theo dõi BK](01-tinh-nang/04-lap-va-theo-doi-bang-ke.md) |
| `GAP-07` | Duyệt bảng kê | Chưa rõ 1 hay 2 cấp duyệt; trạng thái `Trả về` vs `Chưa duyệt` | ✅ **Đã đóng** | Chốt **1 cấp duyệt**; sau duyệt dùng `Hủy duyệt`; `Trả về` bắt buộc nhập lý do | [3.5. Duyệt bảng kê](01-tinh-nang/05-duyet-bang-ke.md) |
| `GAP-08` | Giao NV thay | Thiếu luồng đổi/thu hồi phân công | ✅ **Đã đóng** | Bổ sung tab **`Danh sách đã giao`** hỗ trợ Hủy/Thu hồi phân công & khóa khi đã trở ngại/chốt BK | [3.6. Giao NV thay ĐHN](01-tinh-nang/06-giao-nhan-vien-thay.md) |
| `GAP-09` | Hoàn công & Chốt BK | Thiếu `BR/FR` Chốt BK; mâu thuẫn bắt buộc ĐHN gỡ | ✅ **Đã đóng** | Chốt `TBD-02` (Chốt BK đổ dòng chưa thay sang Nhắc thay), `TBD-05` (bắt buộc `Chỉ số gỡ *`), `DEC-05` & khóa sửa 5 ngày | [3.7. Hoàn công & Chốt BK](01-tinh-nang/07-hoan-cong-va-chot-bang-ke.md) |
| `GAP-10` | Xử lý trở ngại | Mâu thuẫn loại 1–3 (`BR-29` vs `BR-37`) | ✅ **Đã đóng** | Chốt `TBD-01` / `DEC-04`: Loại 1–3 vào tab **`Phòng DVKH`**, không tự hủy/nhắc thay ngay; mở rộng 3 tab & 26 loại | [3.8. Xử lý trở ngại](01-tinh-nang/08-xu-ly-tro-ngai.md) |
| `GAP-11` | Nhắc thay | Thiếu định nghĩa "Kỳ"; `FR-44` nhập tay số BK | ✅ **Đã đóng** | Chốt `TBD-06` / `DEC-05`: trễ hạn = quá **30 ngày** từ ngày giao NV; tự sinh mã `XXXXN/26`, tối đa `300`/BK (`DEC-02`) | [3.9. Nhắc thay](01-tinh-nang/09-nhac-thay.md) |
| `GAP-12` | Import vật tư | Trống 100% đặc tả ở V1.4 | ✅ **Đã đóng** | Bổ sung 100% đặc tả `/ImportVatTu` (ĐHN 19 cột, Chì góc 11 cột, 2 file mẫu, 4 trạng thái `TBD-04` / `DEC-03`) | [3.10. Import vật tư](01-tinh-nang/10-import-vat-tu.md) |
| `GAP-13` | Mobile App | Thiếu toàn bộ `BR/FR/AC`, Offline Mode | 🔄 **Đã xử lý 80%** | Đã bổ sung đủ `FR/BR/AC`, bộ lọc, tự điền combo vật tư & validate ảnh; còn lại Offline Mode ở `TBD-08` | [3.11. Mobile App](01-tinh-nang/11-mobile-app-hien-truong.md) |
| `GAP-14` | Chuẩn hệ thống | Thiếu `AC`, `Data Dictionary`, `API Spec`, `NFR` | 🔄 **Đang xử lý** | Đã bổ sung `AC-<MOD>-NN` cho cả 12 tính năng; tiếp tục chuẩn hóa API/NFR chi tiết ở `TBD-10` | [2.1. Dữ liệu](02-quy-tac-chung.md), [2.2. API](04-tich-hop-api.md), [4.1. NFR](05-yeu-cau-phi-chuc-nang.md) |

---

## 2. Lỗi biên tập đã hiệu chỉnh khi chuyển thể từ V1.4
- Mục `1.3 Phạm vi` trong V1.4 ghi nhầm *"phạm vi triển khai của phần mềm quản lý thu tiền"* → đã sửa thành *phần mềm báo thay đồng hồ nước*.
- Mục `II. Khái quát tài liệu` giới thiệu chia làm *4 phần* nhưng thực tế có *6 chương* → đã chuẩn hóa thành **5 chương theo chuẩn ISO/IEC/IEEE 29148**.
- Mã `BR-YC-0` trong bảng `4.1.3` (thiếu số 7) → đã chuẩn hóa thành `BR-YC-07`.
