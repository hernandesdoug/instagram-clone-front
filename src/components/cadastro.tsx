import type { cadastroProps } from "./cadastro.ts";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from "../services/api.ts";
import { Link } from "react-router-dom";
import { CadastroForm, Inputs, BtnCadastrar } from "../assets/css/cadastro.tsx";

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

