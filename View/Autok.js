import Auto from "./Auto.js";

export default class Autok{
    #lista = []
    #szuloElem

    constructor(lista, szuloElem){
        this.#lista = lista
        this.#szuloElem = szuloElem
        this.#szuloElem.empty()
        this.megjelenit();
    }

    megjelenit(){
        this.#lista.forEach((elem, index) =>{
            console.log(elem)
            new Auto(elem, index, this.#szuloElem)
        })
    }

}