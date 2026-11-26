export abstract class mPrenda {
    protected _codigo: string;
    protected _marca: string;
    protected _costo: number;

    constructor({    
        codigo,  
        marca,
        costo
    }: {
        codigo: string,
        marca: string,
        costo: number
    }) {
        this._codigo = codigo.trim();
        this._marca = marca.trim();
        this._costo = +costo;
    }

    protected precioInicial(): number {
        return this._costo + (this._costo * 0.3);
    }

    abstract precioFinal(): number;


    set codigo(codigo: string) {
        this._codigo = codigo;
    } 

    get codigo(): string {
        return this._codigo;
    }

    set marca(marca: string) {
        this._marca = marca.trim();
    }

    get marca(): string {
        return this._marca;
    }
    set costo(costo: number) {
        this._costo = +costo;
    }

    get costo(): number {
        return this._costo;
    }

    gananciaNeta(){
        return this.precioFinal() - this._costo;
    }
}