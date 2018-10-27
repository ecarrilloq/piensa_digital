console.log("Hola Mundo");
var numero1 =10;
var numero2 =10;
var resultado = numero1+numero2;
console.log(resultado);

var cadena ="El resultado es: ";
console.log(cadena+resultado);

cadena ='Lorem ipsum \t dolor sit "amet" \n consectetur \"adipisicing\" elit.';
console.log(cadena);

var semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
console.log(semana);
console.log(semana[4]);

semana[10]="AAA";
console.log(semana);

var cumple = true;
console.log(!cumple);
/*
for(i=0;i<semana.length;i++){
    console.log(semana[i]);
}

for (dia in semana){
    if(dia%2==0){
        console.log(dia);
        console.log(semana[dia]);
    }else{
        console.log(dia);
        console.log("Otro Valor");
    }

}

semana.forEach(element => {
    console.log(element);
});
*/

function suma( n1,  n2){
    var resultado= n1 +n2;
    console.log("La suma es :"+resultado);
}

suma(5,7);
var cadena = "En un lugar de la mancha de cuyo nombre no quiero acordarme..."
var letras = cadena.split("");

var resultado = "";

for(i in letras){
    if(letras[i]=='a'){
        break;
    }else{
        resultado+=letras[i];
    }
}
console.log(resultado);
