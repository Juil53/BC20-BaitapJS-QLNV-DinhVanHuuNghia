function DanhSachNhanVien(){
    this.mangNV = [];
    this.themNV = function(nhanvien){
        this.mangNV.push(nhanvien);
    }

    //Tìm kiếm index dựa vào taikhoan
    this.timKiemNV = function(taikhoan){
        var viTri = -1;
        this.mangNV.map(function(nhanvien,index){
            if(nhanvien.taiKhoan == taikhoan){
                viTri = index;
            }
        });
        return viTri;
    }

    //Tìm vị trí dựa vào tài khoản NV
    //Xóa nhân viên ra khỏi mảng theo vị trí đó
    this.xoaNV = function(taikhoan){
        var viTri = this.timKiemNV(taikhoan)
        if(viTri > -1){
            this.mangNV.splice(viTri,1)
        }
    }

    //Xem chi tiết nhân viên
    this.xemChiTiet = function(taikhoan){
        var viTri = this.timKiemNV(taikhoan)
        if(viTri > -1){
            return this.mangNV[viTri];
        } else {
            console.log("Ko tìm thấy NV");
        }
    }

    //Cập nhật NhânViên
    this.capNhatNV = function(nhanvien){
        var viTri = this.timKiemNV(nhanvien.taiKhoan);
        if(viTri > -1){
            this.mangNV[viTri] = nhanvien;
        } else {
            console.log("Ko tìm thấy NV");
        }
    }

    //Tìm nhân viên theo xếp loại
   this.searchNhanVien = function(tukhoa){
        var mangTK =[];
        var tuTK = tukhoa.trim().toLowerCase();
        this.mangNV.map(function(nhanvien){
            var loai = nhanvien.loaiNhanVien.toLowerCase();
            if(loai.indexOf(tuTK) > -1){
                mangTK.push(nhanvien);
            }
        })
        return mangTK;
    }

}