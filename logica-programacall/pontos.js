/*
Vamos criar um programa de pontos ganhos do seu time de jogos 
Pesando no programa:
*/
const vitorias = Number(prompt("Quantos jogos o seu time venceu"));
const empates = Number(prompt("Quantos jogos seu time empatou"));

const pontos = (vitorias * 3 + empates);

function mostra(mensagem) {

    document.write(mensagem + pontos);
}

if(pontos > 10) {
  mostra("Seu time foi muito bem");
}else if (pontos < 5) {
    mostra("Seu time precisa melhorar");
}else {
    mostra("Fora do rebaixamento");
}
 