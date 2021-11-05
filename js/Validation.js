function Validation() {
    //Methods
    //Kiểm tra rỗng
    this.checkEmpty = function (valueinput, message, spanID) {
        if (valueinput.trim() != "") {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false
    }

    //Kiểm tra trùng
    this.checkAccount = function (valueinput, message, spanID, mangNV) {
        var isExist = false;
        isExist = mangNV.some(function (nhanvien) {
            return valueinput == nhanvien.taiKhoan;
        })
        // tồn tại trùng
        if (isExist) {
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false
        } else {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
    }

    //Kiểm tra ký tự chữ
    this.checkName = function(valueinput, message, spanID){
        var pattern = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$";
        var reg = new RegExp(pattern);
        if(valueinput.match(reg)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false
    }

    //Kiểm tra định dạng Email
    this.checkEmail = function(valueinput, message, spanID){
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (valueinput.match(pattern)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false
    }

    //Kiểm tra định dạng Pass
    this.checkPass = function(valueinput, message, spanID){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(valueinput.match(pattern)){
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    //Kiểm tra Date
    this.checkDate = function(valueinput, message, spanID){
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if(valueinput.match(pattern)){
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    //Kiểm tra Lương
    this.checkSalary = function (valueinput, message, spanID) {
        var pattern = /^[0-9]+$/;
        if (valueinput.match(pattern) && valueinput >= 1000000 && valueinput <= 20000000) {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    //Kiểm tra lựa chọn chức vụ
    this.checkSelect = function (selectID, message, spanID) {
        if (document.getElementById(selectID).selectedIndex != 0) {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    //Kiểm tra giờ làm
    this.checkHour = function(valueinput, message, spanID){
        var pattern = /^[0-9]+$/;
        if(valueinput.match(pattern) && valueinput <= 200 && valueinput >= 80){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

}




