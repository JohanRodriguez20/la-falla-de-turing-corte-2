export interface iStore{
    onNuevaOrden(callback: () => void ): void;
    reportar(datos: {
        codigo: string;
        marca: string;
        precioFinal: number;
        gananciaNeta: number;
        gananciaTotal: number;
        mayorCodigo: string;
    }):void;
}