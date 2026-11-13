# Đặt sân nhanh

> **Phiên bản hiện tại:** `v1.1` · **Cập nhật lần cuối:** 2026-11-13 · **Trạng thái:** Đang áp dụng

## 1. Mục tiêu & Luồng nghiệp vụ (Flow)

* **Người dùng liên quan:** Người đặt sân (User), Chủ sân (Owner)
* **Luồng chính:**
  1. Người dùng chọn cụm sân, ngày chơi và khung giờ trống.
  2. Hệ thống giữ chỗ tạm thời trong **5 phút** và hiển thị màn hình thanh toán tiền cọc.
  3. Người dùng chuyển khoản thành công → Đơn chuyển trạng thái `Đã xác nhận` và gửi thông báo cho Chủ sân.
* **Ngoại lệ / Trường hợp lỗi:**
  * Nếu quá 5 phút chưa thanh toán → Hệ thống tự động hủy giữ chỗ và nhả khung giờ trống.
  * Nếu người dùng hủy đơn **trước giờ chơi ≥ 24 giờ** → Hệ thống hoàn lại 100% tiền cọc.

## 2. Quy tắc nghiệp vụ (Business Rules)

| Mã      | Quy tắc                                                                        | Ghi chú / Nguồn                      |
| ------- | ------------------------------------------------------------------------------ | ------------------------------------ |
| `BR-01` | Tiền cọc mặc định là **30%** tổng tiền sân (có thể cấu hình theo từng cụm sân) | Chốt khởi tạo v1.0                   |
| `BR-02` | Thời gian giữ chỗ tạm tối đa **5 phút** để tránh khóa sân ảo                   | Cập nhật từ 10 phút (`DEC-02`, v1.1) |
| `BR-03` | Hủy sân trước giờ chơi từ **24 giờ trở lên** được hoàn **100%** tiền cọc       | Bổ sung ở v1.1 (`DEC-02`)            |

## 3. Tiêu chí nghiệm thu (Acceptance Criteria)

* [ ] `AC-01`: Khi người dùng bấm "Đặt sân", khung giờ đó chuyển sang trạng thái `Đang giữ chỗ` với người khác trong 5 phút.
* [ ] `AC-02`: Khi thanh toán cọc thành công, trạng thái đơn chuyển thành `Đã xác nhận` và không bị tự động hủy.
* [ ] `AC-03`: Khi người dùng hủy đơn trước giờ chơi ≥ 24 giờ, trạng thái chuyển `Đã hủy (Hoàn cọc 100%)`.

## 4. Giao diện (UI & Ảnh chụp màn hình)

> Thả ảnh chụp màn hình vào `du-an-mau/assets/dat-san-nhanh/` (hoặc dán `Ctrl+V` trực tiếp trên GitBook) để bổ sung UI.

Ảnh chụp màn hình&#x20;

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

Đây là test thứ 2 của Nhàn Lê

## 5. Lịch sử thay đổi (Version History)

| Phiên bản | Ngày       | Người chốt | Tóm tắt thay đổi                                                                  |
| --------- | ---------- | ---------- | --------------------------------------------------------------------------------- |
| `v1.0`    | 2026-11-13 | Lê Nhân    | Khởi tạo đặc tả tính năng Đặt sân nhanh                                           |
| `v1.1`    | 2026-11-13 | Lê Nhân    | Giảm thời gian giữ chỗ 10→5 phút; bổ sung rule hoàn cọc 100% trước 24h (`DEC-02`) |
