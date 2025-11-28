const express = require("express");
const app = express();
const PORT = 3000;

//Indicar para express ler body com json
app.use(express.json());

app.use(express.static('public'));

// mock
const nomes = [
    { id: 1, nome: "Fernanda", idade: "18" },
    { id: 2, nome: "Caio", idade: "23" },
    { id: 3, nome: "Pedro", idade: "56" },
    { id: 4, nome: "Samuel", idade: "45" },
    { id: 5, nome: "Doris", idade: "33" },
    
];

const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
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


//Criando funções auxiliares
//Retornar o objeto por id
function buscarIdTimes(id) {
    return times.filter((times)=> times.id== id)
}

//Pegar a posição ou index do elemento do Array por id
function buscarIdTimes(id) {
    return times.findIndex((times)=> times.id == id);

}

// Buscando times (ListaTimes)

//Buscando por ID
app.get("/ListaTimes/:id",(req, res)=> {
    let index = req.params.id;

    res.json(buscarIdTimes(index))

});
//Rota alterar times ou outra coisa
app.put("/ListaTimes/:id", (res, res)=> {
    let index = buscarIdTimess(req.params.id);
    times[index].nomeq.body.nome;
    times[index].idade = req.body.idade;
    
    
})

//Adicionando times(ListaTimes)
app.get('/times', (req, res) => {
    res.send(times);
});

//Criando Post para cadastrar ListaTimes
app.post("/ListaTimes", (req, res)=> {
    times.push(req.body);
    res.status(201).send('Times cadastrado co sucesso!');body
});

//Criando Rota para deletar times
app.delete("/ListaTimes/:id", (req, res)=> {
    let index = buscarIdTimes (req.params.id);
    times.splice(index,1);
    res.send(`Times com id ${req.params.id} excluida com sucesso!`);
});

//Rota alterar
app.put("/ListaNomes/:id", (req, res)=> {
    let index = buscarIdNomes(req.params.id);
    nomes[index].nome = req.body.nome;
    nomes[index].idade = req.body.idade;
    
    res.json(nomes);
});






//Buscando pot ID
app.get("/listaNomes/:id",(req, res)=> {
    let index = req.params.id;

    res.json(buscarNomesPorid(index))
    
});

//Criando Post para cadastrar
app.post("/ListaNomes", (req, res)=> {
    nomes.push(req.body);
    res.status(201).send('Nomes cadastrado com sucesso!');
});


//Criando Rota Excluir
app.delete("/ListaNomes/:id", (req, res)=> {
    let id = req.params.id;
    let index = buscarIdNomes(id);
    //se não encontrar,retornar erro
    if(index===  -1){
        return res.status(404).send(`Nenhum nome com id ${id} foi encontrado`)
    }
    nomes.splice(index, 1);
    res.send(`Nomes com id ${req.params.id} excluida com sucesso!`);

});



app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});