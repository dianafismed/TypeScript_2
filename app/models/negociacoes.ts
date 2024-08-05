import { Negociacao } from "./negociacao";

export class Negociacoes{
  private negociacoes: Array<Negociacao> = [];
  // ou private negociacoes: Negociacao [] = []

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao> {
  // ou lista(): readonly Negociacao[]{
    return this.negociacoes;
  }
}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {})
