

function doSomething(){
    var x = parseInt(document.getElementById("num").value);
    switch (x){
        case 1:
            document.write("Tháng 1 có 31 ngày");
            break;
        case 2:
            document.write("Tháng 2 có 28 hoặc 29 ngày");
            break;
        default:
            document.write("Tháng không hợp lệ");
            break;
    }
}

