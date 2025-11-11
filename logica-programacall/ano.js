//criar um programa para verificar o ano de nascimento
const anoAtual = 2025;
let idade = Number(prompt("Digite a sua idade"));
let idade1 = Number(prompt("Digite a idade do Diego"));
let idade2 = Number(prompt("Digite a idade da Juliana"));
let idade3 = Number(prompt("Digite a idade do João"));

//Seu ano de nascimento
let anoNasc = anoAtual - idade;

//ano de nascimento do Diego 
let idadeD = anoAtual - idade1;

//Ano de nascimento da Juliana
let idadej = anoAtual - idade2;

//Ano de nascimento do João
let idadeJo = anoAtual - idade3;

//Diego, 35
//Juliana, 10
//João, 17 anos
console.log("Ano de nascimento: " + anoNasc);
console.log("Ano de nascimento do Diego: " + idadeD);
console.log("Ano de nascimento da Juliana: " + idadej);