import type { cadastroProps } from "./cadastro.ts";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from "../services/api.ts";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cadastro: React.FC = () => {
    const [infoContato, setInfoContato] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [nomeCompleto, setNomeCompleto] = useState<string>();
    const [nomeUsuario, setNomeUsuario] = useState<string>();
    const navigate = useNavigate();
    const handleCadastro = async () => {
        
        try {
            const response = await api.post<cadastroProps>("/user", {infoContato, senha, nomeCompleto, nomeUsuario});
            if (response.status === 201) {
                console.log(response.data)       
                navigate(`/usuario/${response.data.nomeUsuario}`);
            } else {
                console.log("Sign Up Failed!", response.status);
            }
        } catch (error) {
            console.error("Unexpected error!", error);
        }
    }
    return (
        <>
            <div>
                <CadastroForm>
                    <h1>Instagram</h1>
                    <p>Cadastre-se para ver fotos e vídeos dos seus amigos.</p>
                    <Inputs type="text"
                        id="usuario"
                        placeholder="Número do celular ou email"
                        value={infoContato}
                        onChange={e => setInfoContato(e.target.value)}
                        required
                    />
                    <Inputs type="password"
                        id="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        required
                    />
                    <Inputs type="text"
                        id="nome-completo"
                        placeholder="Nome completo"
                        value={nomeCompleto}
                        onChange={e => setNomeCompleto(e.target.value)}
                        required
                    />
                    <Inputs type="text"
                        id="nome-usuario"
                        placeholder="Nome de usuário"
                        value={nomeUsuario}
                        onChange={e => setNomeUsuario(e.target.value)}
                        required
                    />
                    <BtnCadastrar onClick={handleCadastro}>Cadastre-se</BtnCadastrar>
                    <div>
                        <p>Tem uma conta?</p>
                        <Link to={"/"}>Conecte-se</Link>
                    </div>
                </CadastroForm>
            
            </div>
        </>
    )
}

export default Cadastro;

const CadastroForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    margin: 10px;
`;

const Inputs = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 0.2rem;
`;

const BtnCadastrar = styled.button`
  width: 250px;
  height: 30px;
  border-radius: 0.4rem;
  background-color: #00a2ff;
  color: #ffffff;
`;
