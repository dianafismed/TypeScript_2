import { Negociacao } from "./negociacao.js";

export class Negociacoes{
  private negociacoes: Negociacao [] = []; // ou private negociacoes: Array<Negociacao> = []

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] { // ou lista(): ReadonlyArray<Negociacao>{
    return this.negociacoes;
  }
}