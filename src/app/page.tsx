"use client";
import Image from "next/image";
import React, { useState } from "react";

import ResumoCarrinho from "./components/ResumoCarrinho";
import CardProduto from "./components/CardProduto";
import ListagemProdutos from "./components/ListagemProdutos";

import { mockProdutos } from "./mocks/produto";

export default function Produtos() {

  const produtos = mockProdutos;

  const [quantidadeTotalItens, setQuantidadeTotalItens] = useState<number>(0);
  const [precoTotal, setPrecoTotal] = useState<number>(0);

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