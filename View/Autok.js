import Auto from "./Auto.js";

export default class Autok{
    #lista = {}
    #szuloElem

    constructor(lista, szuloElem){
        this.#szuloElem = szuloElem
        this.#lista = lista

    }

    megjelenit(){
        this.#lista.forEach((elem, index) =>{
            new Mezo(elem, index, this.#szuloElem)
        })
    }

}