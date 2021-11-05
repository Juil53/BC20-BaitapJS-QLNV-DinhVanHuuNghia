//Tạo thể hiện liên kết DanhSachNhanVien,Validation vào Main
var dsnv = new DanhSachNhanVien();
var valid = new Validation();

//Tạo LocalStorage lưu danh sách nhân viên
function setLocalStorage(mangNV) {
    localStorage.setItem("DSNV", JSON.stringify(mangNV));
}

//Lấy dữ liệu từ LocalStorage hiện lên giao diện
function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiLenGiaoDien(dsnv.mangNV);
    }
}
getLocalStorage();

//Lây thông tin Nhân Viên có các thuộc tính trong NhanVien.js
function layThongtinNV() {
    var taikhoan = document.getElementById("tknv").value;
    var hoten = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matkhau = document.getElementById("password").value;
    var ngaylam = document.getElementById("datepicker").value;
    var luongcoban = document.getElementById("luongCB").value;
    var chucvu = document.getElementById("chucvu").value;
    var giolam = document.getElementById("gioLam").value;
    //Kiểm tra dữ liệu nhập vào
    var isValid = true;
    //Tài khoản: kiếm tra trống, kiểm tra trùng
    isValid &= valid.checkEmpty(taikhoan, "Tài khoản không được để trống", "tbTKNV") && valid.checkAccount(taikhoan, "Tài khoản không được trùng", "tbTKNV", dsnv.mangNV);
    //Tên: kiểm tra trống, kiểm tra ký tự chữ
    isValid &= valid.checkEmpty(hoten, "Tài khoản không được để trống", "tbTen") && valid.checkName(hoten, "Họ tên không có ký tự số", "tbTen");
    //Email: kiểm tra trống, kiểm tra định dạng
    isValid &= valid.checkEmpty(email, "Email không được để trống", "tbEmail") && valid.checkEmail(email, "Email không hợp lệ", "tbEmail");
    //Pass: kiểm tra trống, kiểm tra hợp lệ
    isValid &= valid.checkEmpty(matkhau, "Mật khẩu không được để trống", "tbMatKhau") && valid.checkPass(matkhau, "Mật khẩu không hợp lệ", "tbMatKhau");
    //Date: kiểm tra trống, kiểm tra định dạng
    isValid &= valid.checkEmpty(ngaylam, "Ngày làm không được để trống", "tbNgay") && valid.checkDate(ngaylam, "Mật khẩu không hợp lệ", "tbNgay");
    //Salary: kiểm tra trống, kiểm tra mức lương
    isValid &= valid.checkEmpty(luongcoban, "Lương không được để trống", "tbLuongCB") && valid.checkSalary(luongcoban, "Mức lương không hợp lệ", "tbLuongCB");
    //Chức Vụ: kiểm tra lựa chọn
    isValid &= valid.checkSelect("chucvu", "Chức vụ không hợp lệ", "tbChucVu");
    //Số giờ làm: kiểm tra trống, kiểm tra thời gian làm
    isValid &= valid.checkEmpty(giolam, "Giờ làm không được để trống", "tbGiolam") && valid.checkHour(giolam, "Giờ làm không hợp lệ", "tbGiolam");

    if (isValid) {
        //lấy giá trị input gắn vào thuộc tính nhanvien
        //Tạo thể hiện NhanVien để liên kết với Main,add những thuộc tính nhập vào cho 1 nhân viên
        var nhanvien = new NhanVien(taikhoan, hoten, email, matkhau, ngaylam, luongcoban, chucvu, giolam);
        nhanvien.tongluong = nhanvien.tinhLuong(chucvu);
        nhanvien.loaiNhanVien = nhanvien.xepLoai(giolam);
        // thêm nhân viên + thuộc tính vào danh sách nhân viên
        dsnv.themNV(nhanvien);
        hienThiLenGiaoDien(dsnv.mangNV);
        setLocalStorage(dsnv.mangNV);
    }

}
document.getElementById("btnThemNV").onclick = layThongtinNV;

//Hiển thị dữ liệu lên giao diện
function hienThiLenGiaoDien(mangNV) {
    var content = "";
    for (var i = 0; i < mangNV.length; i++) {
        var trNV = `<tr>
        <td>${mangNV[i].taiKhoan}</td>
        <td>${mangNV[i].hoTen}</td>
        <td>${mangNV[i].email}</td>
        <td>${mangNV[i].ngayLam}</td>
        <td>${mangNV[i].chucVu}</td>
        <td>${mangNV[i].tongluong}</td>
        <td>${mangNV[i].loaiNhanVien}</td>
        <td>
            <button onclick="xoaNhanVien('${mangNV[i].taiKhoan}')" class="btn btn-danger">Xóa</button>
            <button onclick="xemChiTietNV('${mangNV[i].taiKhoan}')" class="btn btn-success"  data-toggle="modal" data-target="#myModal">Xem</button>
        </td>
        </tr>`
        content += trNV;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}

//Xóa nhân viên
function xoaNhanVien(taikhoanNV) {
    dsnv.xoaNV(taikhoanNV);
    setLocalStorage(dsnv.mangNV);
    hienThiLenGiaoDien(dsnv.mangNV);
}

//Xem chi tiết NhânViên
function xemChiTietNV(taikhoan) {
    var nhanvien = dsnv.xemChiTiet(taikhoan);
    if (nhanvien != undefined) {
        document.getElementById("tknv").disabled = true;
        document.getElementById("tknv").value = nhanvien.taiKhoan;
        document.getElementById("name").value = nhanvien.hoTen;
        document.getElementById("email").value = nhanvien.email;
        document.getElementById("password").value = nhanvien.matkhau;
        document.getElementById("datepicker").value = nhanvien.ngayLam;
        document.getElementById("luongCB").value = nhanvien.luongCoBan;
        document.getElementById("chucvu").value = nhanvien.chucVu;
        document.getElementById("gioLam").value = nhanvien.gioLam;
    }
}

//Cập nhật Nhânviên
function capNhatNV() {
    var taikhoan = document.getElementById("tknv").value;
    var hoten = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matkhau = document.getElementById("password").value;
    var ngaylam = document.getElementById("datepicker").value;
    var luongcoban = document.getElementById("luongCB").value;
    var chucvu = document.getElementById("chucvu").value;
    var giolam = document.getElementById("gioLam").value;
    //Kiểm tra dữ liệu nhập vào
    var isValid = true;
    //Tài khoản: kiếm tra trống, kiểm tra trùng
    // isValid &= valid.checkEmpty(taikhoan, "Tài khoản không được để trống", "tbTKNV") && valid.checkAccount(taikhoan, "Tài khoản không được trùng", "tbTKNV", dsnv.mangNV);
    //Tên: kiểm tra trống, kiểm tra ký tự chữ
    isValid &= valid.checkEmpty(hoten, "Tài khoản không được để trống", "tbTen") && valid.checkName(hoten, "Họ tên không có ký tự số", "tbTen");
    //Email: kiểm tra trống, kiểm tra định dạng
    isValid &= valid.checkEmpty(email, "Email không được để trống", "tbEmail") && valid.checkEmail(email, "Email không hợp lệ", "tbEmail");
    //Pass: kiểm tra trống, kiểm tra hợp lệ
    isValid &= valid.checkEmpty(matkhau, "Mật khẩu không được để trống", "tbMatKhau") && valid.checkPass(matkhau, "Mật khẩu không hợp lệ", "tbMatKhau");
    //Date: kiểm tra trống, kiểm tra định dạng
    isValid &= valid.checkEmpty(ngaylam, "Ngày làm không được để trống", "tbNgay") && valid.checkDate(ngaylam, "Mật khẩu không hợp lệ", "tbNgay");
    //Salary: kiểm tra trống, kiểm tra mức lương
    isValid &= valid.checkEmpty(luongcoban, "Lương không được để trống", "tbLuongCB") && valid.checkSalary(luongcoban, "Mức lương không hợp lệ", "tbLuongCB");
    //Chức Vụ: kiểm tra lựa chọn
    isValid &= valid.checkSelect("chucvu", "Chức vụ không hợp lệ", "tbChucVu");
    //Số giờ làm: kiểm tra trống, kiểm tra thời gian làm
    isValid &= valid.checkEmpty(giolam, "Giờ làm không được để trống", "tbGiolam") && valid.checkHour(giolam, "Giờ làm không hợp lệ", "tbGiolam");

    if (isValid) {
        //lấy giá trị input gắn vào thuộc tính nhanvien
        //Tạo thể hiện NhanVien để liên kết với Main,add những thuộc tính nhập vào cho 1 nhân viên 
        var nhanvien = new NhanVien(taikhoan, hoten, email, matkhau, ngaylam, luongcoban, chucvu, giolam);
        nhanvien.tongluong = nhanvien.tinhLuong(chucvu);
        nhanvien.loaiNhanVien = nhanvien.xepLoai(giolam);
        // thêm nhân viên + thuộc tính vào danh sách nhân viên
        dsnv.capNhatNV(nhanvien);
        hienThiLenGiaoDien(dsnv.mangNV);
        setLocalStorage(dsnv.mangNV);
    }
}
document.getElementById("btnCapNhat").onclick = capNhatNV;

//Tìm kiếm Nhân viên theo xếp loại
document.getElementById("btnTimNV").onclick = function(){
    var tukhoa = document.getElementById("searchName").value;
    var mangTK = dsnv.searchNhanVien(tukhoa);
    hienThiLenGiaoDien(mangTK)
};

document.getElementById("searchName").onkeyup = function(){
    var tukhoa = document.getElementById("searchName").value;
    var mangTK = dsnv.searchNhanVien(tukhoa);
    hienThiLenGiaoDien(mangTK);
}