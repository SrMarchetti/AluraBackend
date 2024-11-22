import fs from "fs"
import { atualizarPost, criarPost, getTodosPosts } from "../models/postsModels.js";

export async function listarTodosPosts (req, res){
    const posts = await getTodosPosts();
    res.status(200).send(posts);
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try{
        const postCriado = await criarPost(novoPost);
        res.status(200).json({postCriado});
    }catch(error){
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na Requisição"});
    }
}

export async function uploadImagem(req, res) {
    const novoPost = req.body;
    try{
        const postCriado = await criarPost(novoPost);
        const imagemID = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemID);
        res.status(200).json({postCriado});
    }catch(error){
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na Requisição"});
    }
}
    
export async function atualizarNovoPost(req, res) {
    // console.info("Aqui");
    const id = req.params.id;
    const urlImagem = `http://localhost:3002/${id}.png`
    const post = {
        imgUrl: urlImagem,
        descricao: req.body.descricao,
        alt: req.body.alt
    }
    // console.info(post);
    try{
        const postCriado = await atualizarPost(id, post);
        res.status(200).json({postCriado});
    }catch(error){
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na Requisição"});
    }
}