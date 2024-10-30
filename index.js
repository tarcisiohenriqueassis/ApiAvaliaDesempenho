import express from "express";

import avaliaDesempenho from "./service/service.js";

const app = express();

app.get('/avaliaDesempenho',(req, res) =>{

    let desempenho = parseInt(req.query.desempenho);
    let resultado = avaliaDesempenho(desempenho);
    let dataDesempenho = new Date().toLocaleString();

    if(isNaN(desempenho)){
        res.status(404).json({error : 'Digite apenas numeros'})
    }
    else{
        res.json({desempenho : resultado, dataDesempenho : dataDesempenho})
    }
    
})

app.listen(3000,()=>{
    let data = new Date().toLocaleString();
    console.log('Servidor ativo '+ data);
})