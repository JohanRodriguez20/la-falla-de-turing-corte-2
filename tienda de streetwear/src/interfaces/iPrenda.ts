export interface iPrenda {
    get codigo(): string;
    get marca(): string;
    get costo(): number;
    get altaDemanda(): boolean;   
    get estampado(): boolean;
     get coleccionPasada(): boolean;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void; 
}