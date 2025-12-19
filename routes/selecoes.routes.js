import express from "express";
import conexao from "../infra/conexao.js"


const router = express.router();

//Buscar todas as seleções 
routes.get ('/selecoes', (req, res)=> {
    const sql = "select * from selecoes";

    conexao.query(sql, (erro, result)=> {
        res.json(result);
    });
});

// buscando por ID
routes.get('/selecoes/:id', (req, res)=> {
    const id = req.params.id;
    const sql = "select * from selecoes where id=?;";

    conexao.query(sql, id ,(erro,result)=> {
        res.json(result[0]);
    });

});
//Criando post para cadastrar
routes.post('/selecoes', (req, res)=> {
    const selecao = req.body;
    const sql = "INSERT INTO selecoes SET?";

    conexao.query (sql, selecao, ()=> {
        res.json({mensagem: "cadastrado com sucesso!"});
    
    });
});

// Deletando registro
routes.delete('/selecoes/:id', (req, res)=> {
    const id = req.params.id;
   const sql = "delete from selecoes where id=?";

    conexao.query(sql, id, ()=> {
        res.json({mensagem: "Deletando com sucesso"});
    });
})

// Alterando times das selecoes 
 routes.put('/selecoes/:id', (req, res)=> {
   const id = req.params.id;
   const selecao= req.body;
   const sql= "update selecoes set? where id=?";
   
   conexao.query(sql,[selecao,id], ()=> {
    res.json({mensagem: "alterando com sucesso"});
   });



});

export default routes;