import api from "../services/api.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Inputs, CamposSenha, Botoes } from "../assets/css/alteraSenha.tsx";

const alteraSenha = () => {
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [] = useState()
    const navigate = useNavigate();

    const handleCancel = () => {
        const usuarioNome = localStorage.getItem("usuario-nome");
        navigate(`/usuario/${usuarioNome}`);
    }

const handleSenha = async () => {
    if (novaSenha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }
    try {
        const idUsuario = localStorage.getItem("usuario-id")
        const response = await api.post(`/user/password/${idUsuario}`, { idUsuario, novaSenha });
        if (response.status === 201) {
            setNovaSenha("");
            setConfirmarSenha("");
            navigate("/feed");
        } else {
            console.log("User data Failed!", response.status);
        }
    } catch (error) {
        console.error("Unexpected error!", error);
    }
}
return (
    <Container>
        <CamposSenha>
            <Inputs type="password"
                id="password"
                placeholder="nova senha"
                value={novaSenha}
                onChange={e => setNovaSenha(e.target.value)}
                required
            />
            <Inputs type="password"
                id="password"
                placeholder="confirma senha"
                value={confirmarSenha}
                onChange={e => setConfirmarSenha(e.target.value)}
                required
            />
            <Botoes>
                <button onClick={handleSenha}>Salvar</button>
                <button onClick={handleCancel}>Cancelar</button>
            </Botoes>

        </CamposSenha>
    </Container>
)
}
export default alteraSenha;