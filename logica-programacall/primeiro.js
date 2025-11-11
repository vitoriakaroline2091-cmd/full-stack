///perguntando o nome para o usuário
const userName = prompt("Qual é seu nome?");
const userAge = prompt("Qual é sua idade?");
const ano = prompt("Em que ano você nasceu?");

//imprimindo o resultado nome (usamos a tag <strong> para deixar a palavra em negrito)
document.write("Seu nome é: " + "<strong>" + userName + "</strong>" + "<br>");

//imprimindo a idade na tela 
document.write("Sua Idade é: " + "<strong>" + userAge + "</strong>" + "<br>");

//imprimindo o ano de nascimento na tela 
document.write("Ano de nascimento: " + "<strong>" + ano + "</strong>");

//imprimindo o resultado no console
console.log(userName);

