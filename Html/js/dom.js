var parrafos = document.getElementsByTagName("p");
console.log(parrafos);
parrafos[1].innerText="Lo cambié";

var mimensaje= document.getElementById("mensaje");
mimensaje.innerText="También lo cambié";
console.log(mimensaje);
mimensaje.style.background = "red";

function cambiarValor(){
    var element = document.getElementById("entrada");
    mimensaje.innerText = element.value;
}
