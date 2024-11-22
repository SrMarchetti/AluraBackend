import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js"; // Importar o módulo de conexão com o banco de dados

// Estabelecimento assíncrono da conexão com o banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
const db = conexao.db("ImersaoBackEnd_Alura"); // Acessar o banco de dados "ImersaoBackEnd_Alura"
const colecao = db.collection("posts"); // Obter a coleção "posts"

// Função assíncrona para recuperar todos os posts do banco de dados
export async function getTodosPosts() {
    return colecao.find().toArray(); // Buscar todos os documentos e convertê-los em um array
}

export async function criarPost(novoPost) {
    return colecao.insertOne(novoPost);    
}

export async function atualizarPost(id, novoPost) {
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});    
}