export interface Posts {
     FOTO_ID: number;
     FOTO_POSTAGEM: string;
     LEGENDA_FOTO: string;
     USUARIO_ID: number;
}

export interface CriarPostProps {
     postagens: Posts[];
}
