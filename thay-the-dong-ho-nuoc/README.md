# Thay thế đồng hồ nước — Cấp nước Nhà Bè

Kho tài liệu nghiệp vụ sống (Living Docs) cho dự án **Phần mềm Báo thay Đồng hồ nước (Web Portal + Mobile App)** — Công ty Cổ phần Cấp nước Nhà Bè, tổ chức theo chuẩn **IEEE 830 / ISO/IEC/IEEE 29148**.

- **Mốc hiện tại (`v1.1` — 2026-11-23):** Cập nhật đồng bộ theo phần mềm thực tế đang vận hành (`As-Is`, đối chiếu trên môi trường Dev + Mobile App + 169 card ClickUp), bổ sung đầy đủ đặc tả `Dashboard`, `Import Vật tư`, `Mobile App`, phân hệ mới **`12. Báo cáo Thay ĐHN`** (6 mẫu báo cáo), đóng 6 điểm mở trọng yếu (`OPEN-01` → `OPEN-06`) và tách rõ các hạng mục Roadmap `v2.0` (`Nhật ký hoạt động UI`, `Lý do hủy hoàn công`).
- **Mốc Baseline (`v1.0` — 2026-11-17):** Bóc tách nguyên trạng từ `SRS_ThayDHN_V1.4` (bản ký hợp đồng).

## Cấu trúc 5 chương chuẩn SRS

1. **Giới thiệu & Tổng quan hệ thống:** [1. Tổng quan hệ thống, RBAC & Sơ đồ](00-tong-quan.md)
2. **Dữ liệu & Tích hợp hệ thống:** [2.1. Quy tắc chung, Dữ liệu & Master Data](02-quy-tac-chung.md) · [2.2. Đặc tả Tích hợp & API](04-tich-hop-api.md)
3. **Đặc tả chức năng (System Features):** [3.0. Danh mục 12 tính năng Web & Mobile](01-tinh-nang/README.md)
4. **Yêu cầu phi chức năng (NFR):** [4.1. Hiệu năng, Offline, Bảo mật & Audit Log](05-yeu-cau-phi-chuc-nang.md)
5. **Phụ lục & Quản trị thay đổi:** [5.1. Điểm thiếu & mâu thuẫn (Gap Tracker)](06-diem-thieu-va-mau-thuan.md) · [5.2. Nhật ký chốt (`DEC-*` / `OPEN-*` & Roadmap `v2.0`)](03-nhat-ky-chot.md)
