const form = document.querySelector("form");
const lista = document.querySelector(".lista");
 const inputNome = document.getElementById("nome");
const inputEmai = document.getElementById("email");
const inputTel = document.getElementById("telefone");
const listaMsg = document.querySelector(".lista-msg");

 form.addEventListener("submit", function(event) {
    event.preventDefault();
 
    //Validação do formulário
    
   if (inputNome.value == "" ||  inputEmai.value == "" ||  inputTel.value == "") {
    alert("Digite seus dados");
    return false;
   }

   // Condição, para retirar a li > .lista-msg
   //se (listaMsg === true)
   if (listaMsg) {
    listaMsg.remove()


   }


    // Criar LI
    const li  = document.createElement("li");

    li.innerHTML = `
      <span class="contato-nome">${inputNome.value}</span>
      <span class="contato-email">${inputEmai.value}</span>
      <span class="contato-telefone">${inputTel.value}</span>
     
    `;
  console.log(li)

  // appendChild()
  lista.appendChild(li)

  //Limpar inputs
  form.reset();
  })

  


    



