const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// mock
const nomes = [
    { id: 1, nome: "Fernanda", idade: "18" },
    { id: 2, nome: "Caio", idade: "23" },
    { id: 3, nome: "Pedro", idade: "56" },
    { id: 4, nome: "Samuel", idade: "45" },
    { id: 5, nome: "Doris", idade: "33" },
    
];

//Criando funções auxiliares
//Retornar o objeto por id
function buscarNomesPorid(id) {
    return nomes.filter((nome) => nome.id == id)
}

//Pegar a posição ou index do elemento do Array por id
function buscarIdNomes(id) {
    return nomes.findIndex((nome) => nome.id == id);

}

//Rota Principal
app.get('/', (req, res) => {
    res.send("Rota Principal");
})


app.get('/teste', (req, res) => {
    res.send("API nodePeople está funcionando! okkkkkk");
});

app.get('/listaNomes', (req, res) => {
    res.send(nomes);
});

// Buscando nomes (ListaNomes)

//Buscando pot ID
app.get("/listaNomes/:id",(req, res)=> {
    let index = req.params.id;

    res.json(buscarNomesPorid(index))
    
});

//Criando Post para cadastrar
app.post("/ListaNomes", (req, res)=> {
    nomes.push(req.body);
    res.status(201).send('Nomes cadastrado com sucesso');
});


//Criando Rota Excluir
app.delete("/ListaNomes/:id", (req, res)=> {
    let index = buscarIdNomes (req.params.id);
    nomes.splice(index, 1);
    res.send(`Nomes com id ${req.params.id} excluida com sucesso!`);

});

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});