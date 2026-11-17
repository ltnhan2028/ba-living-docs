---
tags:
  - new
---

# Ghi chỉ số & thu tiền nước

> **Phiên bản hiện tại:** `v0.1` · **Cập nhật lần cuối:** 2026-11-16 · **Trạng thái:** Bản nháp khởi tạo

{% hint style="info" %}
Đây là khung đặc tả khởi tạo (`v0.1`). Bạn có thể bổ sung chi tiết biểu giá, công thức tính định mức và các trường hợp ngoại lệ thực tế của đơn vị.
{% endhint %}

## 1. Mục tiêu & Luồng nghiệp vụ (Flow)

- **Người dùng liên quan:** Nhân viên ghi chỉ số, Nhân viên thu tiền, Kế toán

{% stepper %}
{% step %}
### Bước 1: Mở kỳ ghi & phân tuyến
Hệ thống mở kỳ hóa đơn mới và phân danh sách điểm dùng nước theo tuyến cho nhân viên ghi chỉ số.
{% endstep %}

{% step %}
### Bước 2: Ghi chỉ số tại hiện trường
Nhân viên nhập **chỉ số mới**, chụp ảnh mặt đồng hồ; hệ thống tự tính sản lượng tiêu thụ (`Chỉ số mới - Chỉ số cũ`).
{% endstep %}

{% step %}
### Bước 3: Tính tiền & phát hành hóa đơn
Hệ thống áp biểu giá theo đối tượng sử dụng/định mức, kiểm tra sản lượng bất thường và phát hành hóa đơn.
{% endstep %}

{% step %}
### Bước 4: Thu tiền & gạch nợ
Nhân viên thu tiền (hoặc khách hàng thanh toán online) → hệ thống cập nhật trạng thái `Đã thanh toán` và ghi nhận đối soát cuối ngày.
{% endstep %}
{% endstepper %}

- **Ngoại lệ / Trường hợp lỗi:**
  - *(Chờ bổ sung: chỉ số mới nhỏ hơn chỉ số cũ, sản lượng tăng/giảm đột biến, không tiếp cận được đồng hồ, thu tiền một phần/hủy phiếu thu...)*

## 2. Quy tắc nghiệp vụ (Business Rules)

| Mã | Quy tắc | Ghi chú / Nguồn |
|---|---|---|
| `BR-01` | Chỉ số mới thông thường phải `>=` chỉ số kỳ trước (trừ trường hợp quay vòng hoặc thay đồng hồ) | Khởi tạo khung v0.1 |
| `BR-02` | Mỗi lần thu tiền thành công phải ghi nhận **thời gian thu**, **người thu** và **hình thức thanh toán** để đối soát | Khởi tạo khung v0.1 |

## 3. Tiêu chí nghiệm thu (Acceptance Criteria)

- [ ] `AC-01`: Nhân viên ghi chỉ số nhập được chỉ số mới, đính kèm ảnh và hệ thống tính đúng sản lượng.
- [ ] `AC-02`: Hóa đơn sau khi thu tiền chuyển trạng thái `Đã thanh toán` và không cho thu trùng lần hai.

## 4. Giao diện (UI & Ảnh chụp màn hình)

> Dán `Ctrl+V` trực tiếp trên GitBook hoặc thả ảnh vào `.gitbook/assets/` để bổ sung màn hình giao diện.

## 5. Lịch sử thay đổi (Version History)

| Phiên bản | Ngày | Người chốt | Tóm tắt thay đổi |
|---|---|---|---|
| `v0.1` | 2026-11-16 | nhanlt | Khởi tạo khung đặc tả dự án Ghi thu tiền nước |
