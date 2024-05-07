import CardProduto from "./CardProduto"

interface ListagemProdutosProps{
    produtos: Produto[],  
    adicionarAoCarrinho: Function
}

export default function ListagemProdutos({produtos, adicionarAoCarrinho}: ListagemProdutosProps){
    return (
        <>
        <h5 className="mb-3">Produtos disponíveis:</h5>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                {produtos.map((produto) => (
                    <CardProduto 
                        key={produto.id}
                        produto = {produto}
                        adicionarAoCarrinho = {adicionarAoCarrinho}
                    />
                ))}
            </div> 
        </>
    )
}