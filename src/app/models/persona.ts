export class Persona {


        id?: number;
        nombreCompleto: string;
        telefono: string;
        imagen: string;
        backimagen: string;
        titulos: string;
        ubicacion: string;
        acerca: string;

        constructor(nombreCompleto: string, imagen: string, backimagen: string, titulos: string, telefono: string, ubicacion:string, acerca:string){
       
            this.backimagen = backimagen;
            this.nombreCompleto = nombreCompleto;
            this.titulos = titulos;
            this.telefono = telefono;
            this.ubicacion = ubicacion;
            this.acerca = acerca;
            this.imagen = imagen;
        }
    
}
