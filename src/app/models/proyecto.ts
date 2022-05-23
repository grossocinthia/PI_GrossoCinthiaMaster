export class Proyecto {
    id?: number;
    
    imagenProy: string;
    tituloProy: string;
    descripcion: string;
    link: string;
    
   

    constructor(imagenProy: string, tituloProy: string, descripcion: string, link: string){
        
        this.imagenProy = imagenProy;
        this.tituloProy = tituloProy;
        this.descripcion = descripcion;
        this.link = link;
        
}
}