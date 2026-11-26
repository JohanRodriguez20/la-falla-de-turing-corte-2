import { mPrenda } from  "./mPrenda.js"
export default class mStore {
    private acTotal: number = 0;
    private mayGanancia: number = 0;
    private auxMayCodigo: string = "";

    constructor(){
        this.acTotal = 0;
        this.mayGanancia = 0;
        this.auxMayCodigo = "";
    }
    
    procesar(r: mPrenda): void{
        this.acTotal += this.acTotal
        if(this.mayGanancia < r.gananciaNeta())
         this.mayGanancia = r.gananciaNeta();
         this.auxMayCodigo = r.codigo;
    }
    gananciaTotal(){
        return this.acTotal;
    }
    mayorCodigo(){
        return this.auxMayCodigo;
    }

}