import { useQuery } from "@tanstack/react-query";
import { getDetalheProduto } from "../service/produto";
import { useParams } from "next/navigation";


export function useDetalheProdutos(){

    const params = useParams();
    const {data, isPending, isError} = useQuery({
        queryKey: ["detalheProduto"],
        queryFn: () => getDetalheProduto((params.produto).toString()),
    });

    return {produto: data, isPending, isError};
}