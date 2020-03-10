const nome = "Carlos";
const peso = 84;
const altura = 1.88;
const sexo = "M";

const imc = peso / (altura * altura);

let message = ""

if (imc >= 30){
    message = `${nome} Voce está acima do peso`
} else {
    message = `${nome} Voce não esta acima do peso`
}

console.log(message)