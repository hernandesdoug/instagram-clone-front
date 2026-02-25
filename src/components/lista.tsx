import api from "../services/api.ts";
import { Container, ListaSeg, UsuarioInfo, NomeUsuario, NomeCompleto, ImgPerfil } from "../assets/css/lista.tsx";
import type { Dados } from "./lista.ts";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./footer.tsx";

const Lista = () => {
    const [usuarios, setUsuarios] = useState<Dados[]>([]);
    const [seguidores, setSeguidores] = useState<boolean>(false);
    const [seguindo, setSeguindo] = useState<boolean>(false);
    const navigate = useNavigate();
    const buscaLista = async () => {
        try {
            const usuarioId = localStorage.getItem("usuario-id");
          
            const response = await api.get<Dados[]>(`/seguir/seguidores/${usuarioId}`);
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
        }, [])
    return (
        <>
            <Container>
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