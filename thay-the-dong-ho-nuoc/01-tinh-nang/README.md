# 01. Tính năng — Phần mềm Báo thay Đồng hồ nước

Danh sách đặc tả chi tiết 11 nhóm chức năng (Web Portal & Mobile App), được bóc tách từ bản gốc **SRS_ThayDHN_V1.4** (`v1.0` Baseline).

Mỗi tài liệu đều tuân theo khung 7 phần chuẩn:
1. **Mục tiêu & Tác nhân liên quan**
2. **Luồng nghiệp vụ (Flow & Diagrams)**
3. **Đặc tả màn hình & Trường dữ liệu (UI & Field Specs)**
4. **Yêu cầu chức năng (`FR-*`)**
5. **Quy tắc nghiệp vụ (`BR-*`)**
6. **Tiêu chí nghiệm thu (`AC-*`)**
7. **Giao diện (UI) & Lịch sử thay đổi**

---

## Danh mục chức năng

| STT | Tính năng | Nền tảng | Trạng thái ở SRS V1.4 | Tài liệu |
|---|---|---|---|---|
| 01 | Đăng nhập, Dashboard & Nhật ký | Web | Sơ bộ (thiếu BR/FR/AC) | [01-dang-nhap-va-dashboard.md](01-dang-nhap-va-dashboard.md) |
| 02 | Báo thay theo yêu cầu | Web | Khá đầy đủ (thiếu AC, validate) | [02-bao-thay-theo-yeu-cau.md](02-bao-thay-theo-yeu-cau.md) |
| 03 | Duyệt báo thay bất thường | Web | Khá đầy đủ (mâu thuẫn Code, thiếu AC) | [03-duyet-bao-thay-bat-thuong.md](03-duyet-bao-thay-bat-thuong.md) |
| 04 | Lập & theo dõi bảng kê | Web | Khá đầy đủ (thiếu công thức lọc, mẫu In, AC) | [04-lap-va-theo-doi-bang-ke.md](04-lap-va-theo-doi-bang-ke.md) |
| 05 | Duyệt bảng kê | Web | Khá đầy đủ (thiếu AC, ghi đè lịch sử) | [05-duyet-bang-ke.md](05-duyet-bang-ke.md) |
| 06 | Giao nhân viên thay ĐHN | Web | Khá đầy đủ (thiếu thu hồi/đổi NV, AC) | [06-giao-nhan-vien-thay.md](06-giao-nhan-vien-thay.md) |
| 07 | Hoàn công & Chốt bảng kê | Web | Thiếu đặc tả Chốt BK & Thống kê vật tư | [07-hoan-cong-va-chot-bang-ke.md](07-hoan-cong-va-chot-bang-ke.md) |
| 08 | Xử lý trở ngại | Web | Có mâu thuẫn loại 1–3 (`BR-29` vs `BR-37`) | [08-xu-ly-tro-ngai.md](08-xu-ly-tro-ngai.md) |
| 09 | Nhắc thay | Web | Thiếu định nghĩa "Kỳ", chống trùng số BK | [09-nhac-thay.md](09-nhac-thay.md) |
| 10 | Import vật tư | Web | **Trống 100%** ở SRS V1.4 | [10-import-vat-tu.md](10-import-vat-tu.md) |
| 11 | Mobile App hiện trường | Mobile | Sơ bộ (thiếu BR/FR/AC, Offline mode) | [11-mobile-app-hien-truong.md](11-mobile-app-hien-truong.md) |
