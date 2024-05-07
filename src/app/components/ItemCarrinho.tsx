const valorTotalProduto = (
    precoUnitario: number,
    quantidade: number
): number => precoUnitario * quantidade;

interface ItemProps {
    item : ItemCarrinho,
    removerItemDoCarrinho: Function
}

export default function ItemCarrinho({item, removerItemDoCarrinho} : ItemProps){
    return (
        <tr key={item.id}>
            <td>{item.nome}</td>
            <td>R$ {item.preco.toFixed(2)}</td>
            <td>{item.quantidade}</td>

            <td>R$ {valorTotalProduto(item.preco, item.quantidade).toFixed(2)}</td>
            <td>
            <button className="btn btn-danger btn-sm" onClick={()=>removerItemDoCarrinho(item.id)}>
                Remover
            </button>
            </td>
         </tr>
    )
}
