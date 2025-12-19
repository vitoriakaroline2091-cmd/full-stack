import express from "express";
const app = express();
// indicar para o express body com json
    app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá Copa do Mundo!");
});



export default app;