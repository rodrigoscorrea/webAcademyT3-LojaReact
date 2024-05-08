"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import ResumoCarrinho from "./components/ResumoCarrinho";
import CardProduto from "./components/CardProduto";
import ListagemProdutos from "./components/ListagemProdutos";

export default function Produtos() {

  const [produtos, setProdutos] = useState();
  const [quantidadeTotalItens, setQuantidadeTotalItens] = useState<number>(0);
  const [precoTotal, setPrecoTotal] = useState<number>(0);

  useEffect(()=>{
    fetch(" https://ranekapi.origamid.dev/json/api/produto")
    .then((response)=>response.json())
    .then((json)=>setProdutos(json));
  }, []);

  const adicionarAoCarrinho = (produto: Produto):void => {
    setQuantidadeTotalItens(quantidadeTotalItens + 1);
    setPrecoTotal(precoTotal + Number(produto.preco));
  }  

  return (
    <>
      <main>
        <div className="container p-5">
          <ResumoCarrinho quantidadeItensTotal = {quantidadeTotalItens} precoTotal = {precoTotal}/>
          <ListagemProdutos  produtos = {produtos} adicionarAoCarrinho = {adicionarAoCarrinho}/>
        </div>
      </main>
    </>
  );
}