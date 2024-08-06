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
}
