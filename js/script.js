let km = prompt("Quanti km devi percorrere?");
console.log(km);

let eta = prompt("Qual è la tua età?");
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

console.log(prezzo_finale);

const button = document.querySelector(".btn");

button.addEventListener("click", function(){

let nome = document.getElementById("Nome").value
console.log(nome)

let cognome = document.getElementById("Cognome").value
console.log(cognome)
} )