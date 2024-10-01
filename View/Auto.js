
export default class Auto{

    #kepAdat = {}
    #id
    #szuloElem

    constructor(id, szuloElem, kepAdat){
        this.#kepAdat = kepAdat
        this.#id = id;
        this.#szuloElem = szuloElem;

        this.megjelenit()
        this.gombElem 
    }

    megjelenit(){
        let txt = `<div class="card col-lg-4 col-md-6"> <div class="card-body"> 
            <p class="card-text">${this.#kepAdat.fajta}</p>
            <p class="card-text">${this.kepAdat.evjarat}</p>
            <p class="card-text">${this.kepAdat.szin}</p>`
        txt += `</div>`
        this.#szuloElem.append(txt);
    }

    gombkattint(){
        this.gombElem.on("click", () =>{
            const e = new CustomEvent("kattint", {detail:this.#id})
            window.dispatchEvent(e)
        })
    }

}
