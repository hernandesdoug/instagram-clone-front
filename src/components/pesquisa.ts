export interface Dados {
    ID: number;
    NOMEUSUARIO: string;
    NOMECOMPLETO: string;
    FOTOPERFIL: string;
}

export interface pesquisaProps {
    results: Dados[];
}