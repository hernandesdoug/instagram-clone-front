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
                        <div>
                            <button>Salvar</button>
                            <button>Cancelar</button>
                        </div>

                    </div>

                ) : (
                    <div>
                        <Perfil>
                            <Voltar to={"/"}></Voltar>
                            <p>usuario</p>
                        </Perfil>

                        <Info>
                            <ImgPerfil src="" alt="" />
                            <NomeUsuario>
                                <span>nome do Usuario</span>
                                <Dados>
                                    <span> postagens</span>
                                    <span> seguidores</span>
                                    <span> seguindo</span>
                                </Dados>
                            </NomeUsuario>
                        </Info>
                        <BioUsuario>
                            <p>Bio</p>
                            <div>
                                <button onClick={altCampos}>editar perfil</button>
                                <button>mensagens</button>
                            </div>
                        </BioUsuario>
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
    display: flex;
    align-items: center;
    gap: 30px;
`;

const ImgPerfil = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid #000 ;
  object-fit: cover;
`;

const BioUsuario = styled.div`
    display: flex;
    flex-direction: column;
`;

const NomeUsuario = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
`;

const Dados = styled.div`
display: flex;
gap: 25px;
`;


