import styled from "styled-components";
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

                            <div>
                                {usuarios.map(dado => (
                                    <div key={dado.ID} onClick={() => navigate(`/usuario/${dado.NOMEUSUARIO}`)}>
                                        <ImgPerfil src={dado.FOTOPERFIL} alt={dado.NOMECOMPLETO} />
                                        <p>{dado.NOMEUSUARIO}</p>
                                        <span>{dado.NOMECOMPLETO}</span>
                                    </div>
                                ))}
                            </div>

                        )}
                    </>
                )}
                <Footer></Footer>
            </Container>
        </>
    )
}
export default Pesquisa;

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;
 `;

const Busca = styled.div`
    margin-bottom: 16px;
    display: flex;
    input {
        width: 100%;
        padding: 10px 14px;
        border-radius: 8px;
        border: 1px solid #ccc;
        font-size: 14px;
   }
   button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    margin-left: 5px;
   }
`;

const ImgPerfil = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #ccc ;
  object-fit: contain;
`;