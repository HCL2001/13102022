// //Bai 1
// var a = parseInt(prompt("Nhap vao so a"));
// var b = parseInt(prompt("Nhap vao so b"));
//
// if(a % b == 0)
//     alert("A chia het cho B");
// else
//     alert("A khong chia het cho B");
// //==================================

// //Bai 2
// var age = parseInt(prompt("Nhap tuoi"));
// if(age >= 16)
//     alert("Du tuoi");
// else
//     alert("Khong du tuoi");
// //===============================

// //Bai 3
// var numInt = parseInt(prompt("Nhap vao mot so nguyen"));
// if (numInt > 0)
//     alert(numInt + " lon hon 0")
// else
//     alert(numInt + " nho hon 0");
// //============================

// // Bai 4
// var numA = parseInt(prompt("Nhap vao so A"));
// var numB = parseInt(prompt("Nhap vao so B"));
// var numC = parseInt(prompt("Nhap vao so C"));
//
// if (numA > numB && numA > numC)
//     alert(numA + " la so lon nhat");
// else if (numB > numA && numB > numC)
//     alert(numB + " la so lon nhat");
// else
//     alert(numC + " la so lon nhat");
// //=================

// // Bai 5
// var diemKTs = parseInt(prompt("Nhap vao diem cac bai kiem tra"));
// var diemGK = parseInt(prompt("Nhap vao diem thi giua ky"));
// var diemCK = parseInt(prompt("Nhap vao diem thi cuoi ky"));
// var diemTB = (diemKTs + diemGK + diemKTs) / 3;
//
// if(diemTB >= 8)
//     alert("Hoc luc gioi");
// else
//     alert("Hoc luc yeu");

// // Bai 6
// var doanhSoban = parseInt(prompt("Nhap vao doanh so ban"));
// if(doanhSoban >= 30){
//     alert("Hoa hong 100%")
// }else
//     alert("Hoa hong 0%");

// // Bai 7
//     var tongSoPhuc = parseInt(prompt("Nhap vao tong so Phuc"));
//     var tienDienThoai = 3000;
//
//     if (tongSoPhuc >= 3000){
//         document.write("Tien gia cuoc cua ban la " + (tienDienThoai * 2500) + " VND");
//     }else if(tongSoPhuc < 3000 || tongSoPhuc > 2500 )
//         document.write("Tien gia cuoc cua ban la " + (tienDienThoai * 1500) + " VND");
//     else
//         document.write("Tien gia cuoc cua ban la " + (tienDienThoai * 1000) + " VND");