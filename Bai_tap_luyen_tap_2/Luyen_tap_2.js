// //Bai 1
// var C = parseFloat(prompt("Nhap vao do C"));
//
// document.write("Nhiet do tu C qua do F la " + (C * 9/5 + 32) + " oF");

// // Bai 2
// var mile = parseFloat(prompt("Nhap vao m"));
// document.write("Tu met sang feet la " + (3.2808 / mile));

// //Bai 3
// var a = parseFloat(prompt("Nhap vao canh a"));
// document.write("Dien tich hinh vuong la: " + (a * 2));

//Bai 4
// var a, b;
// a = parseFloat(prompt("Nhap vao canh a"));
// b = parseFloat(prompt("Nhap vao canh b"));
// document.write("Dien tich hinh chu nhat: " + (a * b));

//Bai 5
// var a, b;
// a = parseFloat(prompt("Nhap vao canh ke a"));
// b = parseFloat(prompt("Nhap vao canh ke b"));
// document.write("Dien tich tam giac vuong khi biet 2 canh ke la: " + (1/2 * a * b));

//Bai 6
// var a, b;
// a = parseFloat(prompt("Nhap vao a"));
// b = parseFloat(prompt("Nhap vao b"));
//
// if(a == 0){
//     if (b == 0){
//         document.write("Phuong trinh co vo so nghiem");
//     }else {
//         document.write("Phuong trinh vo nghiem");
//     }
// } else
//     document.write("Phuong trinh co nghiem la: " + -b / a);

//Bai 7
// var a, b, c;
// a = parseFloat(prompt("Nhap vao so a"));
// b = parseFloat(prompt("Nhap vao so b"));
// c = parseFloat(prompt("Nhap vao so c"));
//
// if (a == 0){
//     if (b == 0){
//         document.write("Phuong trinh vo nghiem");
//     }else {
//         document.write("Phuong trinh co nghiem la: " + -c/b);
//     }
// }else {
//     var Delta = (b * b) - (4 * a * c);
//     if(Delta < 0) {
//         document.write("Phuong trinh vo nghiem");
//     }else if (Delta >= 0){
//         document.write("Phuong trinh co 2 nghiem phan biet la: " + ((-b + Math.sqrt(Delta))/(2 * a)
//         + " " + (-b - Math.sqrt(Delta))/(2 * a)));
//     }
// }

//Bai 8
// var age = parseInt(prompt("Nhap tuoi"));
//
// if (age < 120 && age > 0)
//     document.write("Tuoi ban vua nhap la: " + age);
// else
//     document.write("Tuoi khong hop le");

//Bai 9
// var a, b, c;
// a = parseFloat(prompt("Nhap vao so a"));
// b = parseFloat(prompt("Nhap vao so b"));
// c = parseFloat(prompt("Nhap vao so c"));
//
// if ((a > 0) && (b > 0) && (c > 0)){
//     if ((a + b > c) && (b + c > a) && (a + c > b))
//         document.write("Day la mot tam giac");
// }else {
//     document.write("Khong phai tam giac");
// }

//Bai 10
// var khoangDiensudung = parseFloat(prompt("Nhap vao khoang dien su dung"));
// if (khoangDiensudung == 50 || khoangDiensudung < 50){
//     document.write("Tien dien phai tra la: " + ((1678 * khoangDiensudung) + 83.900));
// } else if (khoangDiensudung > 50 || khoangDiensudung < 100)
//     document.write("Tien dien phai tra la: " + ((1734 * khoangDiensudung) + 86700));
// else {
//     document.write("Tien dien phai tra la: " + ((2014 * khoangDiensudung) + 201.400));
// }

//Bai 11
// var nhapVaoluong = parseFloat(prompt("Nhap vao luong cua ban"));
// document.write("Thue thu nhap ca nhan cua ban la: " + (nhapVaoluong * (10/100)) );

//Bai 12
// var tienGui = parseFloat(prompt("Nhap vao so tien gui"));
// var laiSuat = parseFloat(prompt("Nhap vao lai suat ngan hang"));
// var soNgaygui = parseFloat(prompt("Nhap vao so ngay gui"));
// document.write("So tien lai cua ban la: " + (tienGui * (laiSuat / 100) * soNgaygui/360));