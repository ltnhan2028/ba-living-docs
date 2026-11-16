# 00. Tổng quan dự án — Ghi thu tiền nước

> **Phiên bản:** `v0.1` · **Cập nhật:** 2026-11-16 · **Trạng thái:** Khởi tạo khung tài liệu

## 1. Mục tiêu
Quản lý toàn bộ chu trình **ghi chỉ số đồng hồ nước định kỳ**, tính toán sản lượng tiêu thụ & hóa đơn tiền nước theo biểu giá, phát hành thông báo/hóa đơn và ghi nhận thu tiền (tiền mặt hoặc thanh toán không tiền mặt) tại hiện trường và quầy thu.

## 2. Các vai trò (Roles)
- **Nhân viên ghi chỉ số:** Đi tuyến đọc chỉ số đồng hồ nước, chụp ảnh mặt đồng hồ, ghi nhận bất thường (đồng hồ kẹt, mờ mặt, đóng cửa...).
- **Nhân viên thu ngân / Thu tiền:** Thu tiền tại nhà khách hàng hoặc tại quầy, xuất biên nhận/phiếu thu và đối soát cuối ngày.
- **Kế toán / Đối soát:** Kiểm tra sản lượng bất thường, duyệt tính tiền, đối soát công nợ và doanh thu theo kỳ hóa đơn.
- **BA / PO:** Chốt nghiệp vụ, cập nhật tài liệu và quản lý lịch sử thay đổi.
