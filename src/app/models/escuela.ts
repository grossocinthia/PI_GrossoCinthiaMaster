export class Escuela {
    
    id?: number;
    imagenEd: string;
    institucion: string;
    titulo: string;
    estado: string;
    comienzoEd: string;
    finEd: string;
   
   

    constructor(imagenEd: string,institucion: string, titulo: string, estado:string, comienzoEd: string,  finEd: string){
        this.imagenEd = imagenEd;
        this.institucion = institucion;
        this.titulo = titulo;
        this.estado = estado;
        this.comienzoEd = comienzoEd;
        this.finEd = finEd;
        
        
        
    }

}

