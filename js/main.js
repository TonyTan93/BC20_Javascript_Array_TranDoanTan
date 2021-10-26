var arrNum = [];

function nhapArr() {
    var soNhap = Number(document.getElementById("nhapSo").value);
    arrNum.push(soNhap);
}
document.getElementById("btnAdd").onclick = nhapArr;


// Bai 1: tong so duong trong mang
function tongSoDuong() {
    var tongDuong = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            tongDuong += arrNum[i];
        }
    }
    document.getElementById("txtTongDuong").innerHTML =
        "Tổng các số dương là: " + tongDuong;
}
document.getElementById("btnTongDuong").onclick = tongSoDuong;

// bai 2 : Đếm số dương
function countSoDuong() {
    var countDuong = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            countDuong += 1;
        }
    }
    document.getElementById("txtCountDuong").innerHTML =
        "Số các số dương là: " + countDuong;
}
document.getElementById("btnCountDuong").onclick = countSoDuong;

// bai 3: Tim so nho nhat
function timMin() {
    for (var i = 0; i < arrNum.length; i++) {
        for (var j = 0; j < arrNum.length; j++) {
            if (arrNum[j] < arrNum[j + 1]) {
                var temp = arrNum[j];
                arrNum[j] = arrNum[j + 1];
                arrNum[j + 1] = temp;
            }
        }
    }
    document.getElementById("txttimMin").innerHTML =
        "Số nhỏ nhất là: " + arrNum[arrNum.length - 1];
}
document.getElementById("btntimMin").onclick = timMin;

// bai 4: Tim so lớn nhat
function timMax() {
    for (var i = 0; i < arrNum.length; i++) {
        for (var j = 0; j < arrNum.length; j++) {
            if (arrNum[j] > arrNum[j + 1]) {
                var temp = arrNum[j];
                arrNum[j] = arrNum[j + 1];
                arrNum[j + 1] = temp;
            }
        }
    }
    document.getElementById("txttimMax").innerHTML =
        "Số lớn nhất là: " + arrNum[arrNum.length - 1];
}
document.getElementById("btntimMax").onclick = timMax;

// bai 5 : Số chẵn cuối cùng trong mảng
function timChanCuoi() {
    var chanCuoi = "";
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 == 0) {
            chanCuoi = "Số chẵn cuối cùng là: " + arrNum[i];
        } else {
            chanCuoi = "Mảng không có số chẵn (trả về -1)";
        }
    }
    document.getElementById("txtChanCuoi").innerHTML = chanCuoi;
}
document.getElementById("btnChanCuoi").onclick = timChanCuoi;

// bai 6: đổi chỗ  vị trí
function doiViTri() {
    var index1 = document.getElementById("soThuNhat").value;
    var index2 = document.getElementById("soThuHai").value;

    var temp = arrNum[index1];
    arrNum[index1] = arrNum[index2];
    arrNum[index2] = temp;

    document.getElementById("txtDoiCho").innerHTML =
        "Mảng sau khi đổi chỗ: " + arrNum;
}
document.getElementById("btnDoiCho").onclick = doiViTri;

// bai 7: sap xep tang dan
function sapTangDan() {
    for (var i = 0; i < arrNum.length; i++) {
        for (var j = 0; j < arrNum.length; j++) {
            if (arrNum[j] > arrNum[j + 1]) {
                var temp = arrNum[j];
                arrNum[j] = arrNum[j + 1];
                arrNum[j + 1] = temp;
            }
        }
    }
    document.getElementById("txtTangDan").innerHTML =
        "Sắp xếp tăng dần: " + arrNum;
}
document.getElementById("btnTangDan").onclick = sapTangDan;

// bai 8: So nguyen to dau tien trong mang
function timNguyenTo1() {
    var NguyenTo1 = "";
    for (var i = 0; i < arrNum.length; i++) {
        var dauHieu = true;
        if (arrNum[i] >= 2) {
            for (var j = 2; j <= Math.sqrt(Math.abs(arrNum[i])); j++) {
                if (arrNum[i] % j == 0) {
                    dauHieu = false;
                }
            }
        } else {
            dauHieu = false;
        }
        if (dauHieu == true) {
            NguyenTo1 = arrNum[i];
            break;
        } else {
            NguyenTo1 = "Không có số Nguyên tố (trả về -1)";
        }
    }
    document.getElementById("txtNguyenTo1").innerHTML =
        "Số nguyên tố đầu tiên: " + NguyenTo1;
}
document.getElementById("btnNguyenTo1").onclick = timNguyenTo1;

// <!-- bai9: Nhập thêm mảng, đếm số nguyên-->
function nhapThem() {
    var nhapThem = Number(document.getElementById("nhapThem").value);
    arrNum.push(nhapThem);
}
document.getElementById("btnThem").onclick = nhapThem;

function countSoNguyen() {
    var countNguyen = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (Number.isInteger(arrNum[i]) == true) {
            countNguyen += 1;
        }
    }
    document.getElementById("txtDemNguyen").innerHTML =
        "Số các số nguyên là: " + countNguyen;
}
document.getElementById("btnDemNguyen").onclick = countSoNguyen;

// bai 10: So sanh so luong so duong va so am
function soSanh() {
    var countDuong = 0;
    var countAm = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            countDuong += 1;
        } else if (arrNum[i] < 0) {
            countAm += 1;
        }
    }
    if (countDuong > countAm) {
        document.getElementById("txtSoSanh").innerHTML =
            "Số lượng số dương nhiều hơn số âm";
    } else if (countDuong < countAm) {
        document.getElementById("txtSoSanh").innerHTML =
            "Số lượng số âm nhiều hơn số dương";
    } else {
        document.getElementById("txtSoSanh").innerHTML =
            "Số lượng số âm bằng số dương";
    }
}
document.getElementById("btnSoSanh").onclick = soSanh;