import { mPrenda } from "./mPrenda.js";

export class mSneaker extends mPrenda {
    private _altaDemanda: boolean;

constructor({    
        codigo,  
        marca,
        costo,
        altaDemanda
    }: {
        codigo: string,
        marca: string,
        costo: number,
        altaDemanda:boolean
    }) {
        super({codigo, marca,costo});
        this._altaDemanda = Boolean(altaDemanda);
    }
    set altaDemanda(altaDemanda: boolean){
        this._altaDemanda = altaDemanda;
    }

    get altaDemanda(): boolean{
        return this._altaDemanda;
    }
    override precioFinal(): number{
        const  subTotal = this.precioInicial()
        if(this.altaDemanda){
            return subTotal* 1.1;
        }{
            return subTotal;
        }
    }
        public gananciaNeta(): number {
        return this.precioFinal() - this._costo; 
    }
}
