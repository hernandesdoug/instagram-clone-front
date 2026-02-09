export interface Dados {
    id: number;
    nomeUsuario: string;
    nomeCompleto: string;
    imgPerfil: string;
}

export interface pesquisaProps {
    results: Dados[];
}