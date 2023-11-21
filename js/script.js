// let km = prompt("Quanti km devi percorrere?");
// console.log(km);

// let eta = prompt("Qual è la tua età?");
// console.log(eta);

let km;

let eta;

const button = document.querySelector(".btn");

button.addEventListener("click", function(){

km = document.getElementById("km").value;


eta = document.getElementById("eta").value;

} )

console.log(km);

console.log(eta);

let prezzo = km * 0.21;
console.log(prezzo);

if(eta < 18){
    prezzo_finale = prezzo * 0.8
}

else if(eta > 65){
    prezzo_finale = prezzo * 0.6
}

else{
    prezzo_finale = prezzo
}

document.getElementById("prezzo_finale").innerText = prezzo_finale

console.log(prezzo_finale);

