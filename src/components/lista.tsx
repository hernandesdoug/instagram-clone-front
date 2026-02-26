import api from "../services/api.ts";
import { Container, ListaSeg, UsuarioInfo, NomeUsuario, NomeCompleto, ImgPerfil } from "../assets/css/lista.tsx";
import type { Dados } from "./lista.ts";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./footer.tsx";

const Lista = () => {
    const [usuarios, setUsuarios] = useState<Dados[]>([]);
    const { tipo } = useParams<{ tipo: string}>();
    const navigate = useNavigate();
    const buscaLista = async () => {
        try {
            const usuarioId = localStorage.getItem("usuario-id");
            tipo === "seguidores" ? "seguidores" : "seguindo";
            const response = await api.get<Dados[]>(`/seguir/${tipo}/${usuarioId}`);
            if (response.status === 200) {
                setUsuarios(response.data);
            } else {
                console.log("Fetch Data Failed!", response.status);
            }
        } catch (error) {
            console.error("Unexpected error!", error);
        }
    }
    useEffect(() => {
          buscaLista();
        }, [tipo])
    return (
        <>
            <Container>
                <h2>{tipo === "seguidores" ? "Seguidores" : "Seguindo"}</h2>
                <ListaSeg>
                    {usuarios.map(dado => (
                        <UsuarioInfo key={dado.ID} onClick={() => navigate(`/usuario/${dado.NOMEUSUARIO}`)}>
                            <ImgPerfil src={`http://localhost:3333/uploads/${dado.FOTOPERFIL}`} alt={dado.NOMECOMPLETO} />
                            <NomeUsuario>{dado.NOMEUSUARIO}</NomeUsuario>
                            <NomeCompleto>{dado.NOMECOMPLETO}</NomeCompleto>
                        </UsuarioInfo>
                    ))}
                </ListaSeg>
                <Footer></Footer>
            </Container>
        </>
    )

}
export default Lista;