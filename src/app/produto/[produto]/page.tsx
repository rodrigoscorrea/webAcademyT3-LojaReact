"use client"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import DetalhesProduto from "./detalhesProduto";

export default function produto(){
    const [produto, setProduto] = useState<Produto | undefined>();
    const params = useParams();

    useEffect(()=>{
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.produto}`)
        .then((response)=>response.json())
        .then((json)=>setProduto(json));
    }, []);

    return (
        <>
            {produto ? 
            (
            <>
            <DetalhesProduto produto = {produto}/>
            </>) : 
            (<><p>Carregando...</p></>)
            }
        </>
    )
}