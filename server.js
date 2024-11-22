import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express(); // Criar uma instância do Express.js
app.use(express.static("uploads"));
routes(app);

// Função síncrona para buscar um post por ID (considerar consulta ao banco de dados para produção)
// function buscarPostsPorID(id) {
//   // **Sugestão:** Substituir pela consulta ao banco de dados usando `getTodosPosts` com filtro por ID
//   return posts.findIndex((post) => post.ID === Number(id)); // Procura o índice do post com o ID especificado (assumindo um array `posts` global)
// }



// Definir a porta do servidor
const PORT = 3002;

// Iniciar o servidor Express e escutar por conexões
app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}...`);
});