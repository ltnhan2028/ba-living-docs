# 03. Duyệt báo thay bất thường (Theo Code đọc số)

> **Phiên bản hiện tại:** `v1.0` · **Cập nhật lần cuối:** 2026-11-17 · **Trạng thái:** Baseline từ SRS V1.4

---

## 1. Mục tiêu & Tác nhân liên quan

- **Mục tiêu:** Duyệt 2 cấp đối với các đề xuất báo thay bất thường được sinh tự động từ **code lỗi ghi chỉ số** của công tác đọc số, trước khi chuyển sang lập bảng kê.
- **Tác nhân liên quan:**
  - **Cấp duyệt 1:** Phòng QLĐHN.
  - **Cấp duyệt 2:** Phòng KTKS.
- **Tham chiếu SRS V1.4:** Mục `4.2 Duyệt báo thay bất thường`.

---

## 2. Luồng nghiệp vụ (Flow & Diagrams)

### 2.1. Flowchart quy trình

![Flowchart duyệt báo thay bất thường](../assets/flowchart-duyet-bao-thay-bat-thuong.png)

### 2.2. Diễn giải luồng chính
1. Báo thay theo code được khởi tạo tự động dựa trên code đầu 6 từ quá trình Đọc số → **không có màn hình tạo tay**, chỉ có màn hình duyệt xác nhận.
2. **Duyệt cấp 1 (Phòng QLĐHN):** Kiểm tra danh bộ có code bất thường + hình ảnh đọc số → Duyệt hoặc Hủy duyệt.
3. **Duyệt cấp 2 (Phòng KTKS):** Chỉ nhận các báo thay đã được Phòng QLĐHN duyệt. Khi KTKS duyệt, báo thay đủ điều kiện sang bước Lập bảng kê (`BR-BT-02`, `BR-BT-03`).
4. **Ưu tiên chống trùng với báo thay định kỳ:** Khi thực hiện báo thay bất thường/theo yêu cầu mà trùng danh bộ đang có báo thay định kỳ, hệ thống cảnh báo và hủy báo thay định kỳ để ưu tiên báo thay bất thường/theo yêu cầu.

### 2.3. Sequence Diagram

![Sequence Diagram duyệt báo thay bất thường](../assets/sequence-duyet-bao-thay-bat-thuong.png)

---

## 3. Đặc tả màn hình & Trường dữ liệu

- **Hành vi tải trang:** Mặc định khi vào màn hình **không load dữ liệu**, bắt buộc chọn tối thiểu 1 điều kiện tìm kiếm.
- **Tab phân cấp duyệt:**
  - Tab **Phòng QLĐHN:** Hiển thị báo thay có code bất thường (chờ duyệt / đã duyệt cấp 1).
  - Tab **Phòng KTKS:** Chỉ hiển thị báo thay đã được Phòng QLĐHN duyệt.
- **Bộ lọc tìm kiếm cơ bản:**

| Trường | Kiểu | Mô tả (theo V1.4) | Điểm cần bổ sung `[TODO]` |
|---|---|---|---|
| Tổ | Dropdown | Chọn tổ quản lý danh bộ | Có lọc theo Phòng (`QLĐHN 1/2`) không? |
| Code | Dropdown | V1.4 mục `4.2.3` chỉ liệt kê `60 (ĐHN ngưng)` và `61 (Kính mờ)` | > [!CAUTION] Mâu thuẫn danh sách Code ở `4.3.3` (`60, 61, 62, 63, 64, 66`) |
| Loại báo thay | Dropdown | Mục `4.2.3` ghi lấy từ danh mục 22 loại (mục 4.1.2) | Cần xác nhận màn hình Báo thay bất thường có thực sự dùng dropdown `Loại báo thay` này không |

- **Thao tác trên 2 bảng (Chờ duyệt / Đã duyệt):** Checkbox chọn 1 hoặc nhiều dòng; Icon xem hình ảnh báo thay (phóng to khi click); Button **Duyệt**; Button **Hủy** (chuyển từ Đã duyệt về Chờ duyệt).

---

## 4. Yêu cầu chức năng (Functional Requirements)

| Mã | Mô tả / Hành vi hệ thống (theo SRS V1.4) |
|---|---|
| `FR-BT-01` | Khi báo thay bất thường đã được Phòng QLĐHN duyệt nhưng chưa được Phòng KTKS duyệt, báo thay đó vẫn hiển thị trong danh sách **Đã duyệt** tại tab của Phòng QLĐHN. |
| `FR-BT-02` | Trên mỗi báo thay hiển thị thêm trạng thái duyệt của Phòng QLĐHN. |
| `FR-BT-03` | Trong quá trình duyệt, người dùng có thể xem lại hình ảnh báo thay (từ hệ thống Đọc số). |
| `FR-BT-04` | Cho phép phóng to hình ảnh khi nhấn vào từng hình. |
| `FR-BT-05` | Khi chọn một hoặc nhiều báo thay để Duyệt hoặc Hủy duyệt, hiển thị popup xác nhận trước khi thực hiện. |
| `FR-BT-06` | Danh sách trong bảng Chờ duyệt và Đã duyệt sắp xếp mặc định theo thứ tự thời gian giảm dần (mới → cũ). |

> [!WARNING] Thiếu đặc tả ở V1.4 — Đồng bộ ngược & Hủy vĩnh viễn
> V1.4 không mô tả trường hợp Phòng QLĐHN **từ chối/hủy hẳn** một code lỗi từ Đọc số (không phải chỉ là "hủy duyệt" trả về chờ duyệt) thì dữ liệu ở hệ thống Đọc số có bị cập nhật ngược lại hay không.

---

## 5. Quy tắc nghiệp vụ (Business Rules)

| Mã | Mô tả chi tiết (theo SRS V1.4) |
|---|---|
| `BR-BT-01` | Báo thay bất thường được liên kết với code đọc số. Code đầu 6 (ví dụ `60`, `61`,...) được đưa vào diện báo thay. |
| `BR-BT-02` | Luồng duyệt 2 cấp: **Phòng QLĐHN duyệt → Phòng KTKS duyệt → Lập bảng kê**. |
| `BR-BT-03` | Chỉ báo thay được duyệt đủ cả 2 cấp mới có thể tiến đến bước Lập bảng kê. |
| `BR-BT-04` | Chỉ có thể hủy duyệt báo thay khi báo thay **chưa lập bảng kê**. |
| `BR-BT-05` | Hệ thống phân quyền để mỗi đối tượng duyệt chỉ xem và xử lý ở cấp duyệt của mình, không được duyệt thay cấp duyệt khác. |

> [!CAUTION] Mâu thuẫn & Thiếu sót cần chốt (`OPEN-03`)
> 1. **Danh sách Code hợp lệ:** Chốt chính xác là `{60, 61}` hay `{60, 61, 62, 63, 64, 66}` (như mục `4.3.3`).
> 2. **Xử lý trùng báo thay định kỳ:** Đoạn văn cuối mục `4.2.4` nhắc *"cảnh báo và hủy báo thay định kỳ"* nhưng chưa có mã `BR` / `FR` cụ thể (ví dụ: nếu báo thay định kỳ đã vào bảng kê hoặc đã duyệt thì có hủy tự động không?).

---

## 6. Tiêu chí nghiệm thu (Acceptance Criteria)

> [!WARNING] Thiếu 100% ở V1.4 — Cần bổ sung `AC-*`
> - [ ] `AC-01` *(Đề xuất)*: Khi có dữ liệu code bất thường từ hệ thống Đọc số, bản ghi xuất hiện tại tab `Chờ duyệt` của Phòng QLĐHN và **chưa** xuất hiện ở tab Phòng KTKS.
> - [ ] `AC-02` *(Đề xuất)*: User thuộc Phòng KTKS không được phép thao tác duyệt ở tab Phòng QLĐHN và ngược lại (`BR-BT-05`).
> - [ ] `AC-03` *(Đề xuất)*: Sau khi Phòng QLĐHN duyệt, bản ghi xuất hiện ở tab `Đã duyệt` của QLĐHN đồng thời xuất hiện ở tab `Chờ duyệt` của KTKS (`FR-BT-01`).
> - [ ] `AC-04` *(Đề xuất)*: Không thể hủy duyệt nếu báo thay đã được đưa vào bảng kê (`BR-BT-04`).

---

## 7. Giao diện (UI) & Lịch sử thay đổi

> Ảnh màn hình Figma (`Hình 10`, `Hình 11` trong SRS V1.4) sẽ được bổ sung sau.

| Phiên bản | Ngày | Người chốt | Tóm tắt thay đổi |
|---|---|---|---|
| `v1.0` | 2026-11-17 | Lê Nhân | Chuyển thể từ SRS V1.4 mục `4.2`; đánh dấu mâu thuẫn Code (`OPEN-03`) và thiếu AC |
