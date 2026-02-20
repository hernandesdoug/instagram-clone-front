import type { loginProps } from "./login.ts";
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from "../services/api.ts";
import landing from "../assets/landing-3x.png"
import { Container, LoginPage, Inputs, LandingImg, BtnEntrar } from "../assets/css/login.tsx";

const Login: React.FC = () => {
    const [usuario, setUsuario] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await api.post<loginProps>("/user/login", { usuario, senha });
            const token = response.data.token;
            const idUser = response.data.user.id;
            if (response.status === 201 && token){
                console.log(response.data);
                localStorage.setItem("usuario-token", token);
                localStorage.setItem("usuario-id", String(idUser));
                localStorage.setItem("usuario-nome", response.data.user.nome);
                navigate(`/usuario/${response.data.user.nome}`);   
            } else {
                console.log("User data Failed!", response.status);
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
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                        required
                    />
                    <Inputs type="password"
                        id="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        required
                    />
                    <BtnEntrar onClick={handleLogin}>Entrar</BtnEntrar>
                    <a href="">Esqueceu a senha?</a>
                    <p>Não tem uma conta? <Link to={"/cadastro"}> Cadastre-se</Link></p>
                </LoginPage>
            </Container>
        </>
    )
}

export default Login;


