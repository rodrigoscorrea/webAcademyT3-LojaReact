import axios from "axios"
const api = axios;

export async function getDetalhesProduto() {
    return api.get<Produto[]>("/produto").then((response) => response.data);
}