import api from "./api";

export async function getListaProduto() {
    return api.get<Produto[]>("/produto").then((response) => response.data);
}

export async function getDetalheProduto(nomeProduto: string){
    return api.get<Produto>(`/produto/${nomeProduto}`).then((response) => response.data);
}