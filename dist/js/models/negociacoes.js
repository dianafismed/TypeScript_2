export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // ou private negociacoes: Negociacao [] = []
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // ou lista(): readonly Negociacao[]{
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => { });
