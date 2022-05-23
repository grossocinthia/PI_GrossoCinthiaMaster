export class Experiencia {
     
    id?: number;
    empresa: string;
    imagenEx: string;
    
    posicion: string;
    tipoEmpleo: string;
    comienzoEx: string;
    finEx: string;
    
   

    constructor( empresa: string,imagenEx: string, posicion: string,  tipoEmpleo:string, comienzoEx: string,  finEx: string){
        this.empresa = empresa;
        this.imagenEx = imagenEx;
        
        this.posicion = posicion;
        this.tipoEmpleo = tipoEmpleo;
        this.comienzoEx = comienzoEx;
        this.finEx = finEx;
        
        
        
}
}
