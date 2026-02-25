export interface Dados {
    ID: number;
    NOMEUSUARIO: string;
    NOMECOMPLETO: string;
    FOTOPERFIL: string;
}

export interface listaProps {
    resultados: Dados[];
}