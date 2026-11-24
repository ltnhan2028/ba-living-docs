# Kho Tài Liệu Sống — Hệ thống Cấp nước

{% hint style="info" %}
Đây là cổng tài liệu nghiệp vụ sống (Living Docs) đồng bộ hai chiều giữa **GitHub ↔ GitBook**. Mọi quy tắc, luồng nghiệp vụ, ảnh màn hình và lịch sử thay đổi đều được cập nhật tại đây để BA, PM và Dev cùng tra cứu chung một nguồn.
{% endhint %}

## Danh sách dự án

| STT | Dự án | Phạm vi chính | Truy cập nhanh |
|---|---|---|---|
| 1 | **Gắn và hiệu chỉnh ĐHN** | Tiếp nhận yêu cầu, gắn mới & hiệu chỉnh đồng hồ nước tại hiện trường | [Mở tài liệu](gan-va-hieu-chinh-dong-ho-nuoc/00-tong-quan.md) |
| 2 | **Thay thế ĐHN** | Lập kế hoạch, chốt chỉ số đồng hồ cũ và lắp đặt đồng hồ thay thế | [Mở tài liệu](thay-the-dong-ho-nuoc/00-tong-quan.md) |
| 3 | **Ghi thu tiền nước** | Ghi chỉ số định kỳ, tính sản lượng/hóa đơn và thu tiền nước | [Mở tài liệu](ghi-thu-tien-nuoc/00-tong-quan.md) |

## Quy ước cấu trúc mỗi dự án (Chuẩn 5 chương IEEE 830 / ISO 29148)

Mỗi dự án bên trong đi theo bộ khung thống nhất 5 chương (xem chi tiết tại `AGENTS.md`):
- **Chương 1 — Tổng quan (`00-tong-quan.md`):** Mục tiêu, phạm vi, ranh giới tích hợp, Glossary, RBAC Matrix và sơ đồ tổng quan.
- **Chương 2 — Dữ liệu & Tích hợp (`02-quy-tac-chung.md`, `04-tich-hop-api.md`):** Quy tắc dùng chung, Data Dictionary, Master Data và đặc tả tích hợp API.
- **Chương 3 — Đặc tả chức năng (`01-tinh-nang/`):** Chi tiết từng tính năng theo khung 7 phần (`Flow`, `UI/Fields`, `FR-*`, `BR-*`, `AC-*`, `UI`, `Lịch sử thay đổi`).
- **Chương 4 — Yêu cầu phi chức năng (`05-yeu-cau-phi-chuc-nang.md`):** Hiệu năng, tải đồng thời, Mobile Offline, lưu trữ ảnh và bảo mật/Audit.
- **Chương 5 — Phụ lục & Quản trị thay đổi (`06-diem-thieu-va-mau-thuan.md`, `03-nhat-ky-chot.md`):** Bảng `GAP-*`, nhật ký quyết định nghiệp vụ (`DEC-*`), danh sách **TBD List (`TBD-*`)** và Roadmap `v2.0` (`RM-*`).
