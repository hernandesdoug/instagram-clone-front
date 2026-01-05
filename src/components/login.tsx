import type { loginProps } from "./login.ts";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./footer.tsx";
import api from "../services/api.ts";
import landing from "../assets/landing-3x.png"
import styled from "styled-components";

const Login: React.FC = () => {
    const [dadosEntrada, setDadosEntrada] = useState<loginProps>({
        usuario: "",
        senha: ""
    });
   
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setDadosEntrada(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin = async () => {
        try {
            const response = await api.post("/login", {});
            if (response.status === 200) {

            } else {
                console.log("Login Failed!", response.status);
            }
        } catch (error) {
            console.error("Unexpected error!", error);
        }
    }
    return (
        <>
            <Container>
                <LandingImg>
                    <img src={landing} alt="instragam logo" />
                </LandingImg>
                <LoginPage>
                    <h1>Instagram</h1>
                    <Inputs type="text"
                    id="usuario" 
                    placeholder="Telefone, nome de usuário ou email"
                    value={dadosEntrada.usuario}
                    onChange={handleChange}
                    required
                    />
                    <Inputs type="password" 
                    id="password"
                    placeholder="Senha"
                    value={dadosEntrada.senha}
                    onChange={handleChange}
                    required
                    />
                    <BtnEntrar onClick={handleLogin}>Entrar</BtnEntrar>
                    <a href="">Esqueceu a senha?</a>
                    <p>Não tem uma conta? <Link to={"/cadastro"}> Cadastre-se</Link></p>
                </LoginPage>
            </Container>
            <Footer></Footer>
        </>
    )
}

export default Login;

const Container = styled.div`
    display: flex;
`;

const LandingImg = styled.div`
   width: 50%;
`;
const LoginPage = styled.div`
    width: 50%;
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

const BtnEntrar = styled.button`
  width: 250px;
  height: 30px;
  border-radius: 0.4rem;
  background-color: #00a2ff;
  color: #ffffff;
`;

