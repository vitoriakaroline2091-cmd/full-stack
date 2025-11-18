const form = document.querySelector("form");
 const inputNome = document.getElementById("nome");
const inputEmai = document.getElementById("email");
const inputTel = document.getElementById("telefone");

 form = document.addEventListener("submit", function (event) {
    event.preventDefault();

    //Validação do formulário
    /*
    se o input for vazio, adicionando uma mensagem
    */
   if(inputNome.value=="") {
    alert("Digite o nome");
    return false;
   }
   if(inputEmai.value=="") 
    alert("Digite o email");



    console.log("Nome",inputNome.value);
    console.log("Email",inputEmai.value);
    console.log("Telefone",inputTel.value);
    
  })









