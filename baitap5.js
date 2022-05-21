
function isPrime(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    
    var num = 1;

    if (n <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
    
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    var i = 2;
    while(i <n){
        if( n%i==0 ) {
            num = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return num;
}

function kiemtra(){
    var  sox = +document.getElementById('SNTX').value;
    var i = 0;
    var check = 0 ;
    var ketQua ="";
       while ( i < sox){
        check = isPrime(i);
        if( check === 1 ){
            ketQua += i + " "; 
        }
        i++;
    }
    document.getElementById("ketqua").innerHTML = `${ketQua}` 
}

