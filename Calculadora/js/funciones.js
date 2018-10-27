function calcular(val1,val2,operation){
    var inputRes=document.getElementById("resultado");
    var exp = val1 +" "+operation+" "+val2;
    console.log(exp);
    inputRes.value= eval(exp);
}