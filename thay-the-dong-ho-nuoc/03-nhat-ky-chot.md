# 5.2. Nhật ký chốt (Decision Log), TBD List & Roadmap `v2.0`

Ghi nhận các quyết định nghiệp vụ/phạm vi đã chốt (`DEC-*`), danh sách hạng mục chưa xác định theo chuẩn ISO/IEC/IEEE 29148 (**TBD List — `TBD-*`**) và kế hoạch nâng cấp **Roadmap `v2.0` (`RM-*`)**.

> [!NOTE] Mốc phát hành kho tài liệu
> - **2026-11-13:** Khởi tạo thư mục Living Docs dự án Thay thế ĐHN.
> - **2026-11-17 (`v1.0` Baseline):** Chuyển thể nguyên trạng `SRS_ThayDHN_V1.4.docx` (bản ký hợp đồng) kèm 21 sơ đồ & 26 ảnh Figma theo cấu trúc 5 chương chuẩn **IEEE 830 / ISO 29148**.
> - **2026-11-23 (`v1.1` As-Is):** Đồng bộ toàn bộ 12 phân hệ theo phần mềm thực tế, đóng `TBD-01` → `TBD-06` và tách Roadmap `v2.0`.

---

## 1. Quyết định nghiệp vụ & phạm vi đã chốt (`DEC-*`)

*(Mã `DEC-*` chỉ cấp cho các quyết định về nghiệp vụ hoặc phạm vi hệ thống; không cấp cho thao tác khởi tạo/định dạng kho tài liệu.)*

| Ngày | Mã | Nội dung đã chốt | Người xác nhận | Tài liệu bị ảnh hưởng |
|---|---|---|---|---|
| 2026-11-23 | `DEC-01` | **Đóng `TBD-03` (Code bất thường):** Chốt chính xác **6 mã `60–65`** (`60 Ngưng`, `61 Kính mờ`, `62 Quay ngược/gắn ngược`, `63 Mờ mặt số/mất ĐHN`, `64 Gỡ co nối...`, `65 Trở ngại thay`), không có `66`. | nhanlt | [03. Duyệt BT bất thường](01-tinh-nang/03-duyet-bao-thay-bat-thuong.md), [2.1. Quy tắc chung](02-quy-tac-chung.md) |
| 2026-11-23 | `DEC-02` | **Giới hạn số dòng/bảng kê:** Nâng chuẩn tối đa lên **`300` dòng/BK** theo yêu cầu khách hàng (áp dụng thống nhất cho cả **Lập bảng kê** lẫn **Nhắc thay**). | nhanlt | [04. Lập BK](01-tinh-nang/04-lap-va-theo-doi-bang-ke.md), [09. Nhắc thay](01-tinh-nang/09-nhac-thay.md), [4.1. NFR](05-yeu-cau-phi-chuc-nang.md) |
| 2026-11-23 | `DEC-03` | **Đóng `TBD-04` (Trạng thái vật tư kho):** Phân tách rõ 4 trạng thái (`Tồn kho` chưa cho dùng, `Chưa sử dụng` được phép chọn hoàn công, `Đã sử dụng` khóa trùng, `Hủy`). | nhanlt | [10. Import vật tư](01-tinh-nang/10-import-vat-tu.md), [07. Hoàn công](01-tinh-nang/07-hoan-cong-va-chot-bang-ke.md), [11. Mobile App](01-tinh-nang/11-mobile-app-hien-truong.md) |
| 2026-11-23 | `DEC-04` | **Đóng `TBD-01` (Trở ngại 3 tab & Loại 1–3):** Chia duyệt trở ngại thành **3 tab phòng ban** (`Phòng DVKH`, `Phòng ĐHN`, `Phòng KTKS`) với 26 loại; loại 1–3 đi qua tab `Phòng DVKH`, không tự hủy ngay. | nhanlt | [08. Xử lý trở ngại](01-tinh-nang/08-xu-ly-tro-ngai.md), [09. Nhắc thay](01-tinh-nang/09-nhac-thay.md), [1. Tổng quan](00-tong-quan.md) |
| 2026-11-23 | `DEC-05` | **Đóng `TBD-02`, `TBD-05`, `TBD-06` & Rule `Số thân gắn`:** (1) Cho phép Chốt BK khi còn dòng chưa thay (dòng đó tự đổ sang Nhắc thay); sau chốt khóa hoàn toàn sửa/hủy. (2) ĐHN gỡ chỉ bắt buộc `Chỉ số gỡ *`. (3) Nhắc thay tự sinh mã `XXXXN/26`, trễ hạn = quá 30 ngày từ ngày giao NV. (4) Nhập `Số thân gắn`: đúng → tự fill ĐHN gắn & combo vật tư; đổi mã khác → load lại phần ĐHN gắn; sai → xóa trống phần ĐHN gắn & báo `✕` đỏ. | nhanlt | [07. Hoàn công](01-tinh-nang/07-hoan-cong-va-chot-bang-ke.md), [09. Nhắc thay](01-tinh-nang/09-nhac-thay.md), [11. Mobile App](01-tinh-nang/11-mobile-app-hien-truong.md) |
| 2026-11-23 | `DEC-06` | **Chốt phạm vi `v1.1` (`As-Is`) & tách Roadmap `v2.0`:** Cập nhật đủ 12 phân hệ (bổ sung mới **`12. Báo cáo Thay ĐHN`** — 6 mẫu báo cáo) và đưa `Nhật ký hoạt động UI`, `Lý do hủy hoàn công`, `Xác nhận đã xem`, `KTTC phiếu thu & Lịch sử thay ĐHN` vào Roadmap `v2.0`. | nhanlt | Toàn bộ thư mục `thay-the-dong-ho-nuoc/` |

---

## 2. TBD List — Danh sách hạng mục chưa xác định (`TBD-*`)

*(Chuẩn IEEE 830 / ISO 29148 — To Be Determined. Các hạng mục `TBD-01` → `TBD-06` đã được chốt và đóng tại `DEC-01` → `DEC-05`.)*

| Mã | Chủ đề | Hạng mục cần xác định thêm | Mức ưu tiên | Trạng thái | Tài liệu liên quan |
|---|---|---|---|---|---|
| `TBD-07` | Lưu lịch sử trả về BK | Cân nhắc lưu bảng lịch sử nhiều lần trả về BK thay vì ghi đè vào cột `Ghi chú` (`FR-DBK-04`). | Thấp | ⏳ Chưa chốt | [05. Duyệt bảng kê](01-tinh-nang/05-duyet-bang-ke.md) |
| `TBD-08` | Mobile Offline & Concurrency | Đặc tả cơ chế lưu tạm khi mất mạng ngoài hiện trường và xử lý xung đột khi Web thu hồi phân công lúc Mobile đang ngoại tuyến. | Cao | ⏳ Chưa chốt | [11. Mobile App hiện trường](01-tinh-nang/11-mobile-app-hien-truong.md), [4.1. NFR](05-yeu-cau-phi-chuc-nang.md) |
| `TBD-09` | State Diagram Nhắc thay | Vẽ lại sơ đồ trạng thái chuẩn của đối tượng Nhắc thay (thay ảnh dán nhầm từ V1.4). | Thấp | ⏳ Chưa chốt | [1. Tổng quan](00-tong-quan.md) |
| `TBD-10` | Ma trận phân quyền & API / NFR | Hoàn thiện CRUD Matrix chi tiết theo từng role, kiểu dữ liệu DB và chuẩn hóa đặc tả API tích hợp / NFR. | Trung bình | ⏳ Chưa chốt | [1. Tổng quan](00-tong-quan.md), [2.1. Dữ liệu](02-quy-tac-chung.md), [2.2. API](04-tich-hop-api.md), [4.1. NFR](05-yeu-cau-phi-chuc-nang.md) |

---

## 3. Roadmap nâng cấp dự kiến (`v2.0`)

Các yêu cầu cải tiến đã thống nhất **chưa áp dụng làm lỗi chặn ở `v1.1`**, đưa vào kế hoạch nâng cấp `v2.0`:

| Mã | Hạng mục Roadmap `v2.0` | Mô tả & Lý do đề xuất | Tài liệu liên quan |
|---|---|---|---|
| `RM-01` | **Giao diện tra cứu Nhật ký hoạt động (Audit Log UI)** | Hiện hệ thống mới ghi log ngầm ở Backend/DB; `v2.0` bổ sung màn hình UI tra cứu lịch sử thao tác theo user, thời gian, danh bộ, số BK. | [01. Đăng nhập & Dashboard](01-tinh-nang/01-dang-nhap-va-dashboard.md) |
| `RM-02` | **Bổ sung ô nhập lý do khi `Hủy hoàn công`** | Hiện tại `Hủy hoàn công` chỉ có popup xác nhận; `v2.0` bổ sung ô nhập lý do bắt buộc để tăng tính kiểm soát (audit trail). | [07. Hoàn công & Chốt BK](01-tinh-nang/07-hoan-cong-va-chot-bang-ke.md) |
| `RM-03` | **Nút "Xác nhận đã xem" & cảnh báo rà soát trước khi Chốt BK** *(ClickUp `z8tvbhybve`)* | Bổ sung cờ xác nhận Tổ trưởng đã kiểm tra hoàn công, tô màu dòng chưa xác nhận ở trang In / Chi tiết BK và cảnh báo khi bấm Chốt BK. | [07. Hoàn công & Chốt BK](01-tinh-nang/07-hoan-cong-va-chot-bang-ke.md) |
| `RM-04` | **Màn hình KTTC cập nhật phiếu thu & Lịch sử thay ĐHN** *(ClickUp `86ey66xje`, `86ey3vhnf`)* | Mở rộng luồng thu phí bồi thường và tra cứu lịch sử nhiều lần thay ĐHN của một danh bộ. | [02. Báo thay YC](01-tinh-nang/02-bao-thay-theo-yeu-cau.md) |
