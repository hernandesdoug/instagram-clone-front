import { Container, Busca, Lista, UsuarioInfo, 
         ImgPerfil, NomeUsuario, NomeCompleto } from "../assets/css/pesquisa.tsx";
import { useState } from "react";
import Footer from "./footer.tsx";
import { FaSearch } from 'react-icons/fa';
import api from "../services/api.ts";
import type { Dados } from "./pesquisa.ts";
import { useNavigate } from "react-router-dom";

function Pesquisa() {
    const [usuarios, setUsuarios] = useState<Dados[]>([]);
    const [buscaUsuario, setBuscaUsuario] = useState("");
    const [modoBusca, setModoBusca] = useState(false);
    const navigate = useNavigate();

    const fetchUsuario = async () => {
        if (!buscaUsuario.trim()) return;
        try {
            const response = await api.get<Dados[]>(`user/search/${buscaUsuario}`);

            if (response.status === 200) {
                setModoBusca(true);
                setUsuarios(response.data);
            } else {
                console.log("Fail loading data", response.status);
            }
        } catch (error) {
            console.error("Unexpected error!", error);
        }
    };
    return (
        <>
            <Container>
                <Busca>
                    <input type="text"
                        id="buscar-info"
                        placeholder="Pesquisar "
                        value={buscaUsuario}
                        onChange={(e) => setBuscaUsuario(e.target.value)}
                    />
                    <button onClick={fetchUsuario}>
                        <FaSearch />
                    </button>
                </Busca>
                {modoBusca && (
                    <>
                        {usuarios.length === 0 ? (
                            <p>Usuário não encontrado</p>
                        ) : (

                            <Lista>
                                {usuarios.map(dado => (
                                    <UsuarioInfo key={dado.ID} onClick={() => navigate(`/usuario/${dado.NOMEUSUARIO}`)}>
                                        <ImgPerfil src={`http://localhost:3333/uploads/${dado.FOTOPERFIL}`} alt={dado.NOMECOMPLETO} />
                                        <NomeUsuario>{dado.NOMEUSUARIO}</NomeUsuario>
                                        <NomeCompleto>{dado.NOMECOMPLETO}</NomeCompleto>
                                    </UsuarioInfo>
                                ))}
                            </Lista>

                        )}
                    </>
                )}
                <Footer></Footer>
            </Container>
        </>
    )
}
export default Pesquisa;

