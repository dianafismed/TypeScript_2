export class Negociacao {
    constructor(
    //private _data: Date,
    data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // get data(): Date{
    //   const data = new Date(this._data.getTime());
    //   console.log(data);
    //   return this.data;
    // }
    get volume() {
        return this.quantidade * this.valor;
    }
    // método que captura dados em formato string e transforma para o tipo correto
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
