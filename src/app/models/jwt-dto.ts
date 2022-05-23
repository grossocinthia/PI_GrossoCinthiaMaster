export class JwtDTO {
    token: string;
    type: string;
    nombreUsuario: string;
    authorities: string[];

    constructor(token: string, type: string, nombreUsuario: string, authorities: string[]) {
        this.nombreUsuario = nombreUsuario;
        this.token = token;
        this.authorities= authorities;
        this.type =type;
    }
}