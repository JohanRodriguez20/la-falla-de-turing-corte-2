import { mPrenda } from "./mPrenda.js";

export class mHoodie extends mPrenda {
    private _estampado: boolean;
    private _coleccionPasada: boolean;

constructor(
        codigo: string,
        marca: string,
        costo: number,
        estampado: boolean,
        coleccionPasada: boolean,
    ) {
        super({ codigo, marca, costo });
        this._estampado = Boolean(estampado);
        this._coleccionPasada = Boolean(coleccionPasada);
    }
    public set estampado(estampado: boolean) {
        this._estampado = estampado;
    }

    public get estampado(): boolean {
        return this._estampado;
    }

    public set coleccionPasada(coleccionPasada: boolean) {
        this._coleccionPasada = coleccionPasada;
    }

    public get coleccionPasada(): boolean {
        return this._coleccionPasada;
    }
    override precioFinal(): number {
        let monto = this.precioInicial();

        if (this._estampado) {
            monto += 8;
        }

        if (this._coleccionPasada) {
            monto -= 6;
        }

        return monto;
    }
        public gananciaNeta(): number {
        return this.precioFinal() - this._costo;
    }
}