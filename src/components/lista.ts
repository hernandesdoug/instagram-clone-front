export interface Dados {
    ID: number;
    NOMEUSUARIO: string;
    NOMECOMPLETO: string;
    FOTOPERFIL: string;
    IND_STATUS: string;
}

export interface listaProps {
    resultados: Dados[];
}