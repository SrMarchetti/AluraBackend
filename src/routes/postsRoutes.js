import express from "express";
import multer from "multer";
import cors from "cors"
import { atualizarNovoPost, listarTodosPosts, postarNovoPost, uploadImagem } from "../controllers/postController.js"; //lembrar de colocar o .js

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const upload = multer({dest: "./uploads"})

const routes = (app) => {
    // Middleware para interpretar dados JSON nas requisições
    app.use(express.json());
    app.use(cors(corsOptions))
    
    // Rota para recuperar todos os posts (GET /posts)
    app.get("/posts", listarTodosPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizarNovoPost);
    // Rota para verificar se o backend está funcionando (GET /api)
    // app.get("/api", (req, res) => {
    //     res.status(200).send("O Backend está funcionando");
    // });
  
    // // Rota para recuperar um post específico por ID (GET /post/:id)
    // app.get("/post/:id", async (req, res) => {
    // const id = req.params.id; // Extrair o ID dinâmico dos parâmetros da requisição
  
    // // **Sugestão:** Utilizar `getTodosPosts` com filtro por ID para buscar o post no banco de dados
    // const post = await getTodosPosts().then((posts) => posts.find((p) => p.ID === Number(id)));
    // if (post) {
    //   res.status(200).send(post);
    // } else {
    //   res.status(404).send("Post não encontrado");
    // }
    // });
  
}

export default routes;