import api from "../services/api.ts";
import { Container, ListaSeg, UsuarioInfo, NomeUsuario, NomeCompleto, ImgPerfil, Tabs, Tab } from "../assets/css/lista.tsx";
import type { Dados } from "./lista.ts";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./footer.tsx";

const Lista = () => {
    const [usuarios, setUsuarios] = useState<Dados[]>([]);
    const [tipo, setTipo] = useState<"seguidores" | "seguindo">("seguidores");
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const buscaLista = async () => {
        try {     
            tipo === "seguidores" ? "seguidores" : "seguindo";
            const response = await api.get<Dados[]>(`/seguir/${tipo}/${id}`);
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
                <Tabs>
                <Tab active={tipo === "seguidores"} onClick={() => setTipo("seguidores")}>
                    Seguidores
                </Tab>
                <Tab active={tipo === "seguindo"} onClick={() => setTipo("seguindo")}>
                    Seguindo
                </Tab>
            </Tabs>
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