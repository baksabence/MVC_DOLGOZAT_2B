import Auto from "../View/Auto.js";
import AutoModell from "../Modell/AutoModell.js";

export default class AutoController{

    constructor(){
        this.taroloElem = $(".autok")
        this.automodell = new AutoModell()
        new Auto(this.automodell.getList(), this.taroloElem)
    }
}