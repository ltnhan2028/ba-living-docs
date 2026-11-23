# 01. Tính năng — Phần mềm Báo thay Đồng hồ nước

Danh sách đặc tả chi tiết **12 nhóm chức năng (Web Portal & Mobile App)**, đã cập nhật lên phiên bản **`v1.1` (2026-11-23)** theo phần mềm thực tế đang chạy (`As-Is`).

Mỗi tài liệu đều tuân theo khung 7 phần chuẩn:
1. **Mục tiêu & Tác nhân liên quan**
2. **Luồng nghiệp vụ (Flow & Diagrams)**
3. **Đặc tả màn hình & Trường dữ liệu (UI & Field Specs)**
4. **Yêu cầu chức năng (`FR-*`)**
5. **Quy tắc nghiệp vụ (`BR-*`)**
6. **Tiêu chí nghiệm thu (`AC-*`)**
7. **Giao diện (UI) & Lịch sử thay đổi**

---

## Danh mục chức năng (`v1.1`)

| STT | Tính năng | Nền tảng | Phiên bản | Trạng thái | Tài liệu |
|---|---|---|---|---|---|
| 01 | Đăng nhập & Dashboard quản lý thay ĐHN | Web | `v1.1` | Đã cập nhật `As-Is` *(Nhật ký UI → Roadmap `v2.0`)* | [01-dang-nhap-va-dashboard.md](01-dang-nhap-va-dashboard.md) |
| 02 | Báo thay theo yêu cầu (Tạo, Sửa, Hủy, Trả về & Duyệt) | Web | `v1.1` | Đã cập nhật `As-Is` (bắt buộc ảnh duyệt, `Trả về`, tạo đè Định kỳ) | [02-bao-thay-theo-yeu-cau.md](02-bao-thay-theo-yeu-cau.md) |
| 03 | Duyệt báo thay bất thường | Web | `v1.1` | Đã chốt `OPEN-03` (6 Code `60–65`, bắt buộc ảnh Cấp 2) | [03-duyet-bao-thay-bat-thuong.md](03-duyet-bao-thay-bat-thuong.md) |
| 04 | Lập, Gửi duyệt & Theo dõi bảng kê | Web | `v1.1` | Đã cập nhật `As-Is` (`300` dòng/BK, `Chờ gửi`, rút danh bộ) | [04-lap-va-theo-doi-bang-ke.md](04-lap-va-theo-doi-bang-ke.md) |
| 05 | Duyệt bảng kê | Web | `v1.1` | Đã chốt 1 cấp duyệt, `Hủy duyệt` & 4 trường hợp thay | [05-duyet-bang-ke.md](05-duyet-bang-ke.md) |
| 06 | Giao nhân viên thay ĐHN & Thu hồi phân công | Web | `v1.1` | Đã bổ sung tab `Danh sách đã giao` & khóa thu hồi | [06-giao-nhan-vien-thay.md](06-giao-nhan-vien-thay.md) |
| 07 | Hoàn công, Thống kê vật tư & Chốt bảng kê | Web | `v1.1` | Đã chốt `OPEN-02`, `OPEN-05`, `DEC-04` & khóa sửa 5 ngày | [07-hoan-cong-va-chot-bang-ke.md](07-hoan-cong-va-chot-bang-ke.md) |
| 08 | Duyệt & Xử lý trở ngại | Web | `v1.1` | Đã chốt `OPEN-01`, 3 tab (`DVKH/ĐHN/KTKS`) & 26 loại | [08-xu-ly-tro-ngai.md](08-xu-ly-tro-ngai.md) |
| 09 | Nhắc thay ĐHN tự động | Web | `v1.1` | Đã chốt `OPEN-06` (tự sinh `XXXXN/26`, trễ hạn 30 ngày, `300`/BK) | [09-nhac-thay.md](09-nhac-thay.md) |
| 10 | Import & Quản lý kho vật tư | Web | `v1.1` | Đã đóng `OPEN-04` (ĐHN 19 cột, Chì góc 11 cột, 4 trạng thái) | [10-import-vat-tu.md](10-import-vat-tu.md) |
| 11 | Mobile App hiện trường | Mobile | `v1.1` | Đã cập nhật `As-Is` (auto-fill vật tư, validate ảnh & chỉ số gỡ) | [11-mobile-app-hien-truong.md](11-mobile-app-hien-truong.md) |
| 12 | **Báo cáo Thay ĐHN (6 mẫu báo cáo)** | Web | `v1.1` | **🆕 Bổ sung mới** so với SRS V1.4 | [12-bao-cao-thay-dhn.md](12-bao-cao-thay-dhn.md) |
