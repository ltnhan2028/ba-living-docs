# 10. Import vật tư (ĐHN & Chì góc)

> **Phiên bản hiện tại:** `v1.0` · **Cập nhật lần cuối:** 2026-11-17 · **Trạng thái:** Trống đặc tả ở SRS V1.4 (chờ bổ sung)

---

## 1. Mục tiêu & Tác nhân liên quan

- **Mục tiêu:** Nhập (import) dữ liệu vật tư gồm **Đồng hồ nước (ĐHN)** và **Chì góc** vào hệ thống, phục vụ cho việc chọn/search số thân tự động load thông số và kiểm tra đối chiếu vật tư khi hoàn công thay ĐHN.
- **Tác nhân liên quan:** *(Chưa xác định trong SRS V1.4 — dự kiến Bộ phận Kho / Vật tư hoặc Phòng QLML / Admin)*.
- **Tham chiếu SRS V1.4:** Mục `2.1 Bảng 3 — Chức năng chính của sản phẩm` (dòng *Import vật tư*) và mục `5.3` (auto-load thông tin ĐHN gắn khi search `Số thân`).

> [!WARNING] Thiếu 100% đặc tả ở SRS V1.4 (`OPEN-04`)
> Chức năng **Import vật tư** được liệt kê trong bảng chức năng tổng quan (`2.1`) và dữ liệu của nó được dùng trực tiếp ở chức năng Hoàn công (`4.6` & `5.3`), nhưng **toàn bộ chương IV của SRS V1.4 không có bất kỳ mục nào mô tả màn hình, mẫu file, FR hay BR cho chức năng này**.

---

## 2. Luồng nghiệp vụ (Flow)

*(Chờ bổ sung sau khi đối chiếu phần mềm thực tế)*

Các bước tối thiểu cần làm rõ:
1. Tải file Excel mẫu từ hệ thống.
2. Điền danh sách ĐHN (`Số thân`, `Hiệu`, `Cỡ`, `Số giấy kiểm định`, `Ngày kiểm định`, `Chì góc`...) hoặc danh sách Chì góc.
3. Upload file lên hệ thống → Validate định dạng & dữ liệu từng dòng → Hiển thị kết quả hợp lệ / dòng lỗi → Xác nhận import.

---

## 3. Đặc tả màn hình & Trường dữ liệu

*(Chờ bổ sung: Cấu trúc cột file Excel mẫu, màn hình quản lý danh sách vật tư đã import, trạng thái vật tư `Chưa sử dụng` / `Đã gắn` / `Hỏng`...)*

---

## 4. Yêu cầu chức năng (Functional Requirements)

> [!WARNING] Thiếu 100% ở V1.4 — Cần bổ sung `FR-*`
> Các câu hỏi cần chốt:
> - Có tải file Excel mẫu trực tiếp trên màn hình không?
> - Khi file có một số dòng lỗi (vd: trùng số thân, sai format ngày kiểm định), hệ thống từ chối cả file (All-or-nothing) hay cho phép import các dòng hợp lệ và xuất file lỗi cho các dòng sai?
> - Có màn hình xem/tìm kiếm/xóa vật tư đã import không?

---

## 5. Quy tắc nghiệp vụ (Business Rules)

> [!WARNING] Thiếu 100% ở V1.4 — Cần bổ sung `BR-*`
> - Rule kiểm tra trùng lặp `Số thân ĐHN` và `Mã chì góc` (theo hiệu/năm hay duy nhất toàn hệ thống?).
> - Rule ràng buộc khi hoàn công: một `Số thân` / `Chì góc` đã sử dụng để hoàn công cho danh bộ A thì có bị khóa để không chọn trùng cho danh bộ B không? Nếu hủy hoàn công danh bộ A thì vật tư có được trả lại trạng thái khả dụng không?

---

## 6. Tiêu chí nghiệm thu (Acceptance Criteria)

> [!WARNING] Thiếu 100% ở V1.4 — Cần bổ sung `AC-*`
> - [ ] `AC-01` *(TODO)*: Import đúng file mẫu hợp lệ thành công và số thân ĐHN mới xuất hiện khi tìm kiếm tại màn hình Hoàn công (Web & Mobile).
> - [ ] `AC-02` *(TODO)*: File sai định dạng hoặc trùng số thân bị phát hiện và báo lỗi rõ từng dòng.

---

## 7. Giao diện (UI) & Lịch sử thay đổi

| Phiên bản | Ngày | Người chốt | Tóm tắt thay đổi |
|---|---|---|---|
| `v1.0` | 2026-11-17 | Lê Nhân | Tạo khung đặc tả cho chức năng *Import vật tư* có mặt ở Bảng `2.1` nhưng bị bỏ trống trong SRS V1.4 (`OPEN-04`) |
