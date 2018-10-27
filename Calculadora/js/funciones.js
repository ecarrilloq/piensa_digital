function calcular(val1,val2,operation){
    var inputRes=document.getElementById("resultado");
    var exp = val1 +" "+operation+" "+val2;
    console.log(exp);
    if (operation=='/' && val2 ==0){
        inputRes.value= "División por 0 no permitida"
    }else{
        inputRes.value= eval(exp);
    }
    
}