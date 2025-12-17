# MISA Recruitment 
## Tính năng chính

### Quản lý ứng viên
- Hiển thị danh sách ứng viên
- Thêm mới ứng viên với đầy đủ thông tin (họ tên, ngày sinh, giới tính, liên hệ, học vấn, kinh nghiệm)
- Chỉnh sửa thông tin ứng viên
- Tìm kiếm ứng viên theo họ tên, email, số điện thoại
- Phân trang và điều chỉnh số bản ghi hiển thị
- Hiển thị toast thông báo khi thao tác thành công hoặc thất bại các chức năng

## Cấu trúc dự án

```
Misa_hw/
│
├── assets/
│   ├── icons/
│   │   └── ICON.svg                # Icon dùng chung
│   │
│   └── json/
│       └── candidates.json         # Seed data ứng viên
│
├── css/
│   ├── base/
│   │   └── commons.css             # CSS dùng chung (variables, reset, utilities)
│   │
│   ├── components/
│   │   ├── modal.css               # Style cho modal
│   │   └── toast.css               # Style cho toast notification
│   │
│   └── pages/
│       └── style.css               # Style riêng cho trang index
│
├── html/
│   └── index.html                  # File HTML chính
│
├── js/
│   ├── core/
│   │   ├── main.js                 # Entry point, xử lý UI chính
│   │   └── utils.js                # Hàm tiện ích dùng chung
│   │
│   ├── components/
│   │   └── toast.js                # Logic toast notification
│   │
│   ├── modules/
│   │   ├── candidatesManagement.js # Logic quản lý ứng viên
│   │   └── validation.js           # Validate form ứng viên
│   │
│   └── service/
│       └── seedData.js             # Load & xử lý dữ liệu ban đầu
│
└── README.md
```

## Cài đặt và Chạy

### Yêu cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Edge, Safari)
- Không cần cài đặt thêm package hay dependencies

### Các bước chạy

1. **Clone repository**
```bash
git clone https://github.com/yourusername/misa-recruitment.git
cd misa-recruitment
```

2. **Mở file HTML**
```bash
# Cách 1: Mở trực tiếp
# Mở file html/index.html bằng trình duyệt

# Cách 2: Sử dụng Live Server (khuyến nghị)
# Nếu dùng VS Code, cài extension Live Server
# Click chuột phải vào index.html → "Open with Live Server"
```

3. **Truy cập ứng dụng**
```
http://localhost:5500/html/index.html
hoặc
file:///path/to/project/html/index.html
```

## 📖 Hướng dẫn sử dụng

### Thêm ứng viên mới
1. Click nút **"Thêm ứng viên"** trên toolbar
2. Điền đầy đủ thông tin trong form
3. Click **"Lưu"** để hoàn tất

### Chỉnh sửa ứng viên
1. Click icon **(Chỉnh sửa)** ở cột cuối cùng của ứng viên
2. Cập nhật thông tin cần thiết
3. Click **"Lưu"** để cập nhật

### Tìm kiếm ứng viên
1. Nhập từ khóa vào ô tìm kiếm trên thanh toolbar
2. Hệ thống tự động lọc theo họ tên, email hoặc số điện thoại

### Phân trang
- Sử dụng nút **◀ Trước** và **Tiếp ▶** để chuyển trang
- Chọn số bản ghi hiển thị từ dropdown (10, 20, 50)

## 🎯 Code Convention

Toàn bộ hàm JavaScript đều tuân theo chuẩn JSDoc:

```javascript
/**
 * Mô tả chức năng của hàm.
 * @param {type} paramName - Mô tả tham số.
 * @returns {type} - Mô tả giá trị trả về.
 * Created By hanv 16/12/2025
 */
function functionName(paramName) {
  // Implementation
}
```
## 📄 License

Dự án được phát triển cho mục đích học tập tại MISA Training.

---

## Authors

- [@halleluujahh](https://github.com/halleluujahh)

