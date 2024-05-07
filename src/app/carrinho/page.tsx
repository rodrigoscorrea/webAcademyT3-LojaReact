"use client";
import React from "react";
import { useState } from "react";
import ResumoCarrinho from "../components/ResumoCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";

export default function Carrinho(){
  
  const [itensCarrinho, setItensCarrinho] = useState<ItemCarrinho[]>(mockItensCarrinho);

  //Cálculo do preço total 
  var precoTotal = 0;
  itensCarrinho.map((item) => {precoTotal += (item.preco*item.quantidade)})
  const [totalPreco, setTotalPreco] = useState<number>(precoTotal);

  //Cálculo da quantidade de itens no carrinho
  var qtdItens = 0;
  itensCarrinho.map((item) => {qtdItens += item.quantidade})
  const [totalItens, setTotalItens] = useState<number>(qtdItens);

  //tratamento da remoção de item do carrinho
  const removerItemDoCarrinho = (id:string): void => {
      var index = 0;
      for(let i = 0; i < itensCarrinho.length; i++){
        if(itensCarrinho[i].id === id){
          index = i;
        }
      }

      setTotalPreco(precoTotal - (itensCarrinho[index].preco * itensCarrinho[index].quantidade));  
      setTotalItens(qtdItens - itensCarrinho[index].quantidade);
      itensCarrinho.splice(index, 1);
      setItensCarrinho(itensCarrinho);
  }

  return (
    <>
      <main>
        <div className="container p-5">
          <ListagemCarrinho itens = {itensCarrinho} removerItemDoCarrinho = {removerItemDoCarrinho}/>
          <ResumoCarrinho quantidadeItensTotal = {totalItens} precoTotal = {totalPreco}/>
        </div>
      </main>
    </>
  )
}  
