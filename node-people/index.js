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

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});