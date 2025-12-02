import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Olá Node js");
});

const cadastros = [
    {
        id: 1,
        nome: "Fernanda Silva",
        telefone: "11987654321",
        cpf: "123.456.789-00",
        email: "fernanda@gmail.com",
        idade: 28,
        endereco: "Rua das Flores, 123"
    },
    {
        id: 2,
        nome: "Caio Oliveira",
        telefone: "11922223333",
        cpf: "987.654.321-11",
        email: "caio@gmail.com",
        idade: 32,
        endereco: "Avenida Brasil, 450"
    },
    {
        id: 3,
        nome: "Pedro Almeida",
        telefone: "21999998888",
        cpf: "321.654.987-55",
        email: "pedro@hotmail.com",
        idade: 45,
        endereco: "Rua Central, 999"
    }
]
// indicar para express ler body com json
app.use(express.json());
app.use(express.static ('public'));

    //Função para pegar a posição ou index do elelemneto array por id
    function buscarIdcadastro(id) {
       return cadastros.findIndex((nome) => nome.id == id);
    };

// Criando funções auxiliares
//retornar o objeto por id
function buscarIdcadastro(id) {
    return nomes.filter((nome) => nome.id == id)
};

// Buscando cadastros (ListaNode)
//Buscando por Id
app.get("/cadastro/:id", (req, res) => {
    let index = req.params.id;
    res.json(cadastros(index))

});
//Rota alterar 
app.put("/cadastro/:id", (req, res) => {
    let index = cadastros(req.params.id);
    node[index].idade=req.body.idade;
    node[index].id=req.body.id;

    res.json(cadastros)
});
//Buscando post para cadastrar
    app.post("/cadastro", (req, res) => {
    node.push(req.body);
    res.status(201).send('Node cadastrado co sucesso!');body
});

//Buscando por ID 
app.get("/cadastro/:id", (req, res) => {
    let index = req.params.id;
    res.json(buscarIdcadastro(index));
});
//Deletando 
app.delete("/cadastro/:id", (req, res) => {
   let id = req.params.id;
   let index = buscarIdcadastro(id);

// se não enconstrar, retornar a erro

if(index === -1) {
    return res.status(404).send(`Nenhum cadastro com id ${id} encontrado`);
}
cadastros.splice(index, 1);
res.send(`Cadastro com id ${req.params.id} excluida com sucesso`)

});


export default app;