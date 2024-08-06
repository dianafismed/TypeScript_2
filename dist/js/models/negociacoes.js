export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // ou private negociacoes: Array<Negociacao> = []
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // ou lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}
