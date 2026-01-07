import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer.tsx";

const Usuario: React.FC = () => {
    const [usuario, setUsuario] = useState<string>();
    const [usuarioBio, setUsuarioBio] = useState<string>();
    const [isEditing, setEditing] = useState<boolean>(false);

    const altCampos = () => {
        setEditing(!isEditing);
    }
    return (
        <>
            <Container>
                {isEditing ? (
                    <div>
                        <label htmlFor="usuario">Usuario</label>
                        <input type="text"
                            id="usuario"
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}
                        />
                        <label htmlFor="usuarioBio">Bio</label>
                        <input type="text"
                            id="usuarioBio"
                            value={usuarioBio}
                            onChange={e => setUsuarioBio(e.target.value)}
                        />
                    </div>

                ) : (
                    <div>
                        <Perfil>
                            <Voltar to={"/"}></Voltar>
                            <p>usuario</p>
                        </Perfil>

                        <Info>
                            <ImgPerfil src="" alt="" />
                            <p>Bio</p>
                            <p>postagens, seguidores, seguindo</p>
                            <button onClick={altCampos}>editar perfil</button>
                            <button>mensagens</button>
                        </Info>
                        <div>

                        </div>
                    </div>

                )}
                <Footer></Footer>
            </Container>
        </>
    )
}
export default Usuario;

const Container = styled.div`
display: block;
`;
const Voltar = styled(Link)`
  margin: 10px;
  width: 20px;
  height: 20px;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  transform: rotate(-45deg);
  display: inline-block;
  cursor: pointer;
`;

const Perfil = styled.div`
    display: flex;
`;

const Info = styled.div`
    display: block;
`;

const ImgPerfil = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 1px solid #000 50%;
  margin: 0 auto;
`;