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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ccc ;
  object-fit: contain;
`;

const Lista = styled.div`
 display: flex;
  flex-direction: column;
  gap: 12px;
`;

const UsuarioInfo = styled.div`
    display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #f2f2f2; 
  }
`;

const NomeUsuario = styled.p`
  font-weight: 700;
  margin: 0;
`;

const NomeCompleto = styled.p`
  font-size: 14px;
  color: #8b8b8b;
`;
