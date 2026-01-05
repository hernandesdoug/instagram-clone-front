import type { cadastroProps } from "./cadastro.ts";
import React, { useState } from 'react';
import Footer from "./footer.tsx";
import api from "../services/api.ts";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cadastro: React.FC = () => {
    const [dadosCadastro, setDadosCadastro] = useState<cadastroProps>({
        usuario: "",
        senha: "",
        nomeCompleto: "",
        nomeUsuario: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDadosCadastro(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleCadastro = async () => {
        try {
            const response = await api.post("/login", {});
            if (response.status === 200) {

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
                        value={dadosCadastro.usuario}
                        onChange={handleChange}
                        required
                    />
                    <Inputs type="password"
                        id="password"
                        placeholder="Senha"
                        value={dadosCadastro.senha}
                        onChange={handleChange}
                        required
                    />
                    <Inputs type="text"
                        id="usuario"
                        placeholder="Nome completo"
                        value={dadosCadastro.nomeCompleto}
                        onChange={handleChange}
                        required
                    />
                    <Inputs type="text"
                        id="usuario"
                        placeholder="Nome de usuário"
                        value={dadosCadastro.nomeUsuario}
                        onChange={handleChange}
                        required
                    />
                    <BtnCadastrar onClick={handleCadastro}>Cadastre-se</BtnCadastrar>
                    <div>
                        <p>Tem uma conta?</p>
                        <Link to={"/"}>Conecte-se</Link>
                    </div>
                </CadastroForm>
                <Footer></Footer>
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
