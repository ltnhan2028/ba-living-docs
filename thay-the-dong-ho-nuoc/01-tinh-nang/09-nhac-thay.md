# 09. Nhắc thay ĐHN

> **Phiên bản hiện tại:** `v1.0` · **Cập nhật lần cuối:** 2026-11-17 · **Trạng thái:** Baseline từ SRS V1.4

---

## 1. Mục tiêu & Tác nhân liên quan

- **Mục tiêu:** Lọc các báo thay bị trễ hạn hoặc trở ngại (quá 3 lần / không được duyệt) để gom vào **bảng kê nhắc thay** mới và trình Ban Lãnh đạo duyệt trước khi giao lại cho QLML thi công.
- **Tác nhân liên quan:** Nhân viên Phòng QLĐHCN (lập bảng kê nhắc thay); Ban Lãnh đạo (duyệt bảng kê nhắc thay).
- **Tham chiếu SRS V1.4:** Mục `4.8 Nhắc thay`.

---

## 2. Luồng nghiệp vụ (Flow & Diagrams)

### 2.1. Flowchart quy trình

![Flowchart nhắc thay](../assets/flowchart-nhac-thay.png)

### 2.2. Diễn giải luồng chính
1. Có **2 nguồn** đưa vào danh sách Nhắc thay (`BR-34`):
   - **Báo thay trễ hạn:** Không được hoàn thành trong kỳ được duyệt (`BR-36`).
   - **Báo thay gặp trở ngại:** Quá 3 lần trở ngại hoặc không được duyệt (`BR-31`, `BR-32`).
2. Người dùng vào màn hình *Nhắc thay*, lọc theo các tiêu chí bắt buộc (`Trường hợp thay`, `Phòng`) và nâng cao (`Số kỳ trễ hạn`...).
3. Chọn số dòng tối đa mỗi bảng kê, nhập số bảng kê nhắc thay (`FR-44`), chọn Phòng QLML giao bảng kê và lập bảng kê nhắc thay.
4. Bảng kê nhắc thay đi qua quy trình Ban Lãnh đạo duyệt rồi chuyển xuống Giao NV thay ĐHN tương tự bảng kê thường (`BR-35`).

### 2.3. Sequence Diagram

![Sequence Diagram nhắc thay](../assets/sequence-nhac-thay.png)

---

## 3. Đặc tả màn hình & Trường dữ liệu

**Tìm kiếm cơ bản:**

| Trường | Kiểu | Bắt buộc | Mô tả (theo V1.4) |
|---|---|---|---|
| Trường hợp thay | Dropdown | **Có** | `Định kỳ`, `Theo yêu cầu`, `Bất thường` |
| Điều kiện lọc (định kỳ) | Dropdown | Khi chọn `Định kỳ` | `Ngày gắn`, `Ngày kiểm định`, `Danh bạ thiếu`, `Theo hiệu` |
| Phòng | Dropdown | **Có** | `Phòng QLĐHN 1`, `Phòng QLĐHN 2` |

**Tìm kiếm nâng cao:**

| Trường | Kiểu | Mô tả (theo V1.4) |
|---|---|---|
| Tổ | Dropdown | Tổ quản lý ĐHN quản lý danh bộ |
| Loại báo thay | Dropdown | Loại báo thay theo yêu cầu |
| Code | Dropdown | `60`, `61` *(lệch với `60, 61, 62, 63, 64, 66` ở mục `4.3.3`)* |
| Hiệu | Dropdown | Hiệu ĐHN hiện tại của danh bộ |
| Cỡ | Dropdown | Cỡ ĐHN hiện tại của danh bộ |
| Số kỳ trễ hạn | Công thức + Input | Chọn công thức so sánh và nhập số kỳ trễ hạn |

**Thao tác:** Nút **Lập bảng kê nhắc thay** (chọn số dòng tối đa mỗi bảng kê để hệ thống chia bảng kê và chọn Phòng QLML để giao bảng kê).

---

## 4. Yêu cầu chức năng (Functional Requirements)

Lập bảng kê nhắc thay kế thừa các `FR` của luồng *Lập bảng kê báo thay* (`FR-LBK-*`) và bổ sung:

| Mã | Mô tả / Hành vi hệ thống (theo SRS V1.4) |
|---|---|
| `FR-42` | Chỉ có các báo thay bị trễ hạn hoặc trở ngại quá số lần / không duyệt mới được nhắc thay. |
| `FR-43` | Số kỳ trễ hạn được tính từ lần báo thay gần nhất được duyệt mà chưa được hoàn công. |
| `FR-44` | Bảng kê nhắc thay có **số bảng kê riêng do người dùng nhập**, không liên quan đến số bảng kê báo thay ban đầu. |

---

## 5. Quy tắc nghiệp vụ (Business Rules)

| Mã | Mô tả chi tiết (theo SRS V1.4) |
|---|---|
| `BR-34` | Có 2 trường hợp vào diện nhắc thay: Báo thay trễ hạn hoặc Báo thay trở ngại quá 3 lần / không được duyệt. |
| `BR-35` | Bảng kê nhắc thay cần qua bước duyệt của Ban lãnh đạo như các bảng kê bình thường. |
| `BR-36` | Báo thay được tính là trễ hạn khi báo thay không được hoàn thành trong **kỳ** được duyệt. |
| `BR-37` | Báo thay gặp trở ngại vào diện `1, 2, 3` (mục `4.7.2`) được tính là **Hủy báo thay**, không thuộc trường hợp nhắc thay. *(Mâu thuẫn với `BR-29`!)* |
| `BR-38` | Mỗi bảng kê nhắc thay chỉ bao gồm một loại thay duy nhất. |

> [!CAUTION] Điểm thiếu & Mâu thuẫn ở V1.4 (`OPEN-01`, `OPEN-06`)
> 1. **Thiếu định nghĩa tham số "Kỳ" (`BR-36`, `FR-43`):** Chưa xác định 1 kỳ bằng bao lâu (1 tháng / 1 chu kỳ ghi chỉ số / số ngày cấu hình?), mốc bắt đầu tính trễ hạn tính từ ngày duyệt báo thay hay ngày duyệt bảng kê hay ngày giao NV?
> 2. **Nhập tay số bảng kê (`FR-44`):** Mâu thuẫn cách tự sinh mã ở `FR-LBK-07`; chưa có rule kiểm tra trùng số bảng kê, độ dài và ký tự cho phép.
> 3. **Mâu thuẫn trở ngại 1–3 (`BR-37` vs `BR-29`):** Xem chi tiết tại [08. Xử lý trở ngại](08-xu-ly-tro-ngai.md).
> 4. **Kế thừa tối đa 250 dòng:** `4.8.4` nói kế thừa FR lập bảng kê, cần xác nhận bảng kê nhắc thay có giới hạn ≤ 250 dòng/BK và vẫn giữ liên kết tới bảng kê gốc hay không.

---

## 6. Tiêu chí nghiệm thu (Acceptance Criteria)

> [!WARNING] Thiếu 100% ở V1.4 — Cần bổ sung `AC-*`
> - [ ] `AC-01` *(Đề xuất)*: Chỉ các báo thay trễ hạn hoặc trở ngại không duyệt / lần 3 xuất hiện trong kết quả tìm kiếm màn hình Nhắc thay (`FR-42`, `BR-34`).
> - [ ] `AC-02` *(Đề xuất)*: Không cho gộp 2 loại thay khác nhau vào cùng 1 bảng kê nhắc thay (`BR-38`).
> - [ ] `AC-03` *(Đề xuất)*: Sau khi lập bảng kê nhắc thay, bảng kê xuất hiện tại màn hình Duyệt bảng kê của Ban Lãnh đạo (`BR-35`).

---

## 7. Giao diện (UI) & Lịch sử thay đổi

> Ảnh màn hình Figma (`Hình 30` trong SRS V1.4) sẽ được bổ sung sau.

| Phiên bản | Ngày | Người chốt | Tóm tắt thay đổi |
|---|---|---|---|
| `v1.0` | 2026-11-17 | Lê Nhân | Chuyển thể từ SRS V1.4 mục `4.8`; gắn note thiếu định nghĩa "Kỳ", validate số BK nhập tay & mâu thuẫn `BR-37` |
