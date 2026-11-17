# 11. Mobile App hiện trường (Thi công, Hoàn công & Báo trở ngại)

> **Phiên bản hiện tại:** `v1.0` · **Cập nhật lần cuối:** 2026-11-17 · **Trạng thái:** Baseline từ SRS V1.4 (thiếu BR/FR/AC & Offline mode)

---

## 1. Mục tiêu & Tác nhân liên quan

- **Mục tiêu:** Cung cấp công cụ di động cho nhân viên thi công ngoài hiện trường nhận danh sách danh bộ được giao, cập nhật kết quả hoàn công (ĐHN gỡ/gắn, vật tư, hình ảnh) hoặc gửi báo cáo trở ngại.
- **Tác nhân liên quan:** Nhân viên thi công Phòng QLML.
- **Tham chiếu SRS V1.4:** Chương `V. ĐẶC TẢ NHÓM CHỨC NĂNG CHÍNH – MOBILE` (`5.1` → `5.4`).

---

## 2. Luồng nghiệp vụ (Flow)

1. Nhân viên đăng nhập Mobile App và vào màn hình **Home (`5.1`)**, chọn chức năng **Thay ĐHN**.
2. Tại màn hình **Danh sách thay ĐHN (`5.2`)**, xem các danh bộ được giao chia theo 3 tab (`Định kỳ`, `Theo code`, `Theo yêu cầu`), sắp xếp tăng dần theo `MLT`.
3. Chọn 1 danh bộ cần xử lý:
   - **Nếu thi công được:** Vào màn hình **Cập nhật hoàn công (`5.3`)**, kiểm tra thông tin ĐHN gỡ, nhập/chọn số thân ĐHN gắn (tự động load thông tin ĐHN mới), nhập vật tư sử dụng, chụp ảnh trước & sau hoàn công rồi gửi hoàn công.
   - **Nếu không thi công được:** Vào màn hình **Báo cáo trở ngại (`5.4`)**, chọn 1 trong 10 loại trở ngại, đính kèm tối đa 5 ảnh và gửi báo cáo trở ngại.

---

## 3. Đặc tả màn hình & Trường dữ liệu

### 3.1. Màn hình Home (`5.1`) & Danh sách thay ĐHN (`5.2`)
- **3 Tab:** `Định kỳ`, `Theo code`, `Theo yêu cầu`.
- **Sắp xếp:** Thứ tự tăng dần theo `MLT`.
- **Hiển thị mỗi dòng:** Có **2 tag** thể hiện *loại báo thay* và *tình trạng hoàn công*.
- **Khối thống kê tiến độ:** Hiển thị tiến độ thay ĐHN của nhân viên, mặc định ở trạng thái đóng (collapse).
- **Tìm kiếm & Lọc:** Mục `2.1` nhắc nhân viên có thể tìm kiếm và lọc theo điều kiện *(mục `5.2` chưa liệt kê cụ thể các trường lọc)*.

### 3.2. Màn hình Cập nhật hoàn công thay ĐHN (`5.3`)
Gồm **5 phần**:

| Phần | Mô tả theo SRS V1.4 | Điểm cần làm rõ `[TODO]` |
|---|---|---|
| 1. Thông tin danh bộ | Hiển thị thông tin danh bộ | Danh sách field cụ thể (read-only) |
| 2. Thông tin ĐHN gỡ | Lấy dữ liệu ĐHN hiện tại để hiển thị và **có thể không điền** | > [!CAUTION] Mâu thuẫn với `BR-27` (bắt buộc nhập đầy đủ ĐHN gỡ/gắn) — xem `OPEN-05` |
| 3. Thông tin ĐHN gắn | **Bắt buộc nhập.** Tại trường `Số thân`, cho phép search và chọn → tự động load `Cỡ`, `Số giấy kiểm định`, `Hiệu ĐHN`, `Chì góc`, `Ngày kiểm định` | Có cho nhập tay `Số thân` không nằm trong danh mục import không? Nhập `Chỉ số gắn` & `Chỉ số gỡ` validate thế nào? |
| 4. Vật tư sử dụng | **Bắt buộc nhập** | Danh mục vật tư dùng chung lấy từ đâu, có số lượng âm/0 không? |
| 5. Hình ảnh hoàn công | Chia 2 phần: *Trước hoàn công* và *Sau hoàn công*. Bắt buộc mỗi phần tối thiểu **1 ảnh**, tối đa tổng **5 ảnh** | Chụp trực tiếp camera hay cho chọn từ thư viện ảnh? Giới hạn dung lượng/nén ảnh? |

### 3.3. Màn hình Báo cáo trở ngại (`5.4`)
- Cho phép chọn **10 loại trở ngại** giống mục `4.7.2` ([08. Xử lý trở ngại](08-xu-ly-tro-ngai.md#32-danh-mục-10-loại-trở-ngai)).
- Cho phép đính kèm/chụp tối đa **5 ảnh** *(chưa quy định tối thiểu có bắt buộc chụp ảnh hoặc nhập ghi chú không)*.

---

## 4. Yêu cầu chức năng (Functional Requirements)

> [!WARNING] Thiếu 100% ở V1.4 — Chương `V` không có bất kỳ mã `FR-*` nào cho Mobile App
> Các yêu cầu bắt buộc cần bổ sung khi đối chiếu phần mềm thực tế:
> - `FR-MOB-01` *(TODO)*: Tải và đồng bộ danh sách công việc được giao (và danh mục ĐHN mới / vật tư) về App để hỗ trợ làm việc khi mạng yếu / mất mạng (Offline Mode).
> - `FR-MOB-02` *(TODO)*: Tìm kiếm và lọc danh sách thay ĐHN theo Danh bộ, MLT, Tên KH, Trạng thái.
> - `FR-MOB-03` *(TODO)*: Chụp / chọn ảnh, nén ảnh trước khi upload, hiển thị tiến trình gửi hoàn công / trở ngại.
> - `FR-MOB-04` *(TODO)*: Khi trở ngại được duyệt trên Web (`FR-40`), cập nhật lại trạng thái cho phép nhân viên tiếp tục hoàn công trên App.

---

## 5. Quy tắc nghiệp vụ (Business Rules)

> [!WARNING] Thiếu 100% ở V1.4 — Chương `V` không có bất kỳ mã `BR-*` nào
> Các quy tắc sống còn cần làm rõ (`OPEN-08`):
> - **Offline Mode:** Nhân viên vào hẻm sâu/hầm chung cư mất 4G có cho phép lưu tạm dữ liệu hoàn công + ảnh trên máy rồi tự push khi có mạng không?
> - **Xung đột dữ liệu (Concurrency):** Nếu trên Web đã hủy/thu hồi bảng kê hoặc đổi phân công cho nhân viên khác, trong lúc Mobile của nhân viên cũ mất mạng rồi gửi hoàn công lên sau đó thì hệ thống chấp nhận hay từ chối?
> - **Giới hạn chỉnh sửa sau khi gửi:** Sau khi bấm gửi hoàn công/trở ngại trên Mobile, nhân viên có được tự sửa lại trên App không hay phải nhờ Tổ trưởng chỉnh trên Portal?

---

## 6. Tiêu chí nghiệm thu (Acceptance Criteria)

> [!WARNING] Thiếu 100% ở V1.4 — Cần bổ sung `AC-*`
> - [ ] `AC-01` *(Đề xuất)*: Nhân viên đăng nhập Mobile App chỉ thấy đúng các danh bộ được giao cho chính mình (`BR-GNV-05`), chia 3 tab và sắp xếp tăng dần theo `MLT`.
> - [ ] `AC-02` *(Đề xuất)*: Khi chọn `Số thân` ĐHN gắn từ danh sách search, các trường `Cỡ`, `Số giấy kiểm định`, `Hiệu`, `Chì góc`, `Ngày kiểm định` tự động điền đúng.
> - [ ] `AC-03` *(Đề xuất)*: Thiếu ảnh trước hoặc ảnh sau hoàn công thì không thể gửi hoàn công; tổng số ảnh vượt quá 5 bị chặn.
> - [ ] `AC-04` *(Đề xuất)*: Gửi báo cáo trở ngại thành công → danh bộ cập nhật trạng thái trở ngại và hiển thị trên màn hình Web *Xử lý trở ngại*.

---

## 7. Giao diện (UI) & Lịch sử thay đổi

> Ảnh màn hình Mobile Figma (`Hình 32`, `Hình 33`, `Hình 34`, `Hình 35` trong SRS V1.4) sẽ được bổ sung sau.

| Phiên bản | Ngày | Người chốt | Tóm tắt thay đổi |
|---|---|---|---|
| `v1.0` | 2026-11-17 | Lê Nhân | Chuyển thể từ SRS V1.4 chương `V`; đánh dấu thiếu toàn bộ BR/FR/AC, Offline mode & mâu thuẫn ĐHN gỡ (`OPEN-05`, `OPEN-08`) |
