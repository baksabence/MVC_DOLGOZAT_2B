
export default class Auto{
    #kepAdat = {}
    #id
    #szuloElem

    constructor(id, szuloElem){
        this.#id = id;
        this.#szuloElem = szuloElem;

        this.megjelenit()
        this.gombElem
    }

    megjelenit(){
        let txt = `<button class="torol btn btn-secondary"></button>
        <div class="card col-lg-4"> 
        <p>${this.#kepAdat}</p>
        </div>`
        this.szuloElem.append(txt);
    }

    gombkattint(){
        this.gombElem.on("click", () =>{
            const e = new CustomEvent("kattint", {detail:this.#id})
            window.dispatchEvent(e)
        })
    }

}
