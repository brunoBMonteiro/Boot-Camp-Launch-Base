const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const calculoAposentadoria = idade + contribuicao;

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoAposentadoria >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 35 && calculoAposentadoria >= 95

if (homemPodeAposentar || mulherPodeAposentar ){
    console.log(`${nome}, voce pode se aposentar!`)
} else {
    console.log(`${nome}, voce não pode se aposentar!`)
}
