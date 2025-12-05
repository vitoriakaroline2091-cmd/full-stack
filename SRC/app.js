import express from "express";
import conexao from "../infra/conexao.js"
const app = express();
// teste
    app.use(express.json());


app.get("/", (req, res) => {
    res.send("Olá Node js")
});


export default app;