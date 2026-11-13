# Kho Tài Liệu Sống (BA Living Docs)

Kho lưu trữ tài liệu nghiệp vụ sống cho các dự án, đồng bộ hai chiều với **GitBook** qua Git Sync và phục vụ hỏi đáp 24/7 qua **AI Bot**.

## Cấu trúc nhiều dự án

Mỗi dự án là một thư mục độc lập (khi nối GitBook, điền tên thư mục vào ô **Project directory**):

```text
ba-living-docs/
└── du-an-mau/                 # Thư mục của 1 dự án (1 Space trên GitBook)
    ├── SUMMARY.md             # Mục lục điều hướng GitBook
    ├── 00-tong-quan.md        # Mục tiêu, vai trò, luồng tổng
    ├── 01-tinh-nang/          # Mỗi tính năng = 1 file SRS (Flow + BR + AC + UI + History)
    ├── 02-quy-tac-chung.md    # Quy tắc dùng chung toàn dự án
    ├── 03-nhat-ky-chot.md     # Decision Log (ai chốt, ngày nào, lý do)
    └── assets/                # Ảnh chụp màn hình UI
```
