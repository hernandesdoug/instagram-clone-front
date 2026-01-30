import styled from "styled-components";
import { useState } from "react";
import Footer from "./footer.tsx";
import { FaSearch } from 'react-icons/fa';
import api from "../services/api.ts";
import type { usuarioProps } from "./usuario.ts";

function Pesquisa() {
    const [usuarios, setUsuarios] = useState<usuarioProps[]>([]);
    const [buscaUsuario, setBuscaUsuario] = useState("");
    const [modoBusca, setModoBusca] = useState(false);

    const fetchUsuario = async () => {
        if (!buscaUsuario.trim()) return;
        try {
            const response = await api.get<usuarioProps>(`user/?query=${buscaUsuario}`);

            if (response.status === 201) {
                setModoBusca(true);
                //setUsuarios(response.data);
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
                  <>
                <div>
                  <li>
                    {usuarios.map(usuario => (
                        <div>
                            <img src="" alt="" />
                            <p></p>
                        </div>    
                    ))}
                  </li>
                </div>
                </>
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