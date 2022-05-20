function main(){
    var X = +document.getElementById("SNTX").value ;
   for (var i = 1 ; i <= X ; i++){
        var kiemTra = 0;
       for (j = 1 ; j <= i ;j++){
           if (i % j === 0){
            kiemTra++ ;
           }
       }
       if (kiemTra === 2){
           document.getElementById("ketQua").innerHTML+= ` ${i}`
       }
   }

  
}


