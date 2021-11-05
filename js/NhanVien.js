function NhanVien(taikhoan,hoten,email,matkhau,ngaylam,luong,chucvu,giolam,loai){
    this.taiKhoan = taikhoan;
    this.hoTen = hoten;
    this.email = email;
    this.matKhau = matkhau;
    this.ngayLam = ngaylam;
    this.luongCoBan = luong;
    this.chucVu = chucvu;
    this.gioLam = giolam;
    this.tongluong = 0;
    this.loaiNhanVien = "";
    //Methods
    this.tinhLuong = function(){
        if(this.chucVu == "Nhân viên"){
        return (this.luongCoBan);    
        } else if(this.chucVu == "Trưởng phòng"){
        return (this.luongCoBan * 2);
        } else if(this.chucVu == "Sếp"){
        return (this.luongCoBan * 3); 
        }
    }
    this.xepLoai = function(){
        if(this.gioLam >= 192){
            return "Xuất Sắc"
        } else if (this.gioLam >= 176 && this.gioLam < 192){
            return "Giỏi"
        } else if (this.gioLam >= 160 && this.gioLam < 176){
            return "Khá"
        } else {
            return "Trung Bình"
        }
    }
}

