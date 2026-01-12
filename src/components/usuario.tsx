import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "./footer.tsx";

const Usuario: React.FC = () => {
    const [usuario, setUsuario] = useState<string>();
    const [nomeUsuario, setNomeUsuario] = useState<string>();
    const [usuarioBio, setUsuarioBio] = useState<string>();
    const [fotoPerfil, setFotoPerfil] = useState<File>();
    const [isEditing, setEditing] = useState<boolean>(false);

    const altCampos = () => {
        setEditing(!isEditing);
    }

    const altCancel = () => {
        setEditing(false);
    }
    return (

        <Container>
            {isEditing ? (
                <Editar>
                    <ImgPerfil src="" alt="" />
                    <label htmlFor="foto">Foto Perfil</label>
                    <input type="file"
                        id="foto"
                        onChange={e => setFotoPerfil(e.target.files?.[0])}>

                    </input>
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text"
                        id="usuario"
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                    />
                    <label htmlFor="nome-usuario">Nome Usuario</label>
                    <input type="text"
                        id="nome-usuario"
                        value={nomeUsuario}
                        onChange={e => setNomeUsuario(e.target.value)}
                    />
                    <label htmlFor="usuarioBio">Bio</label>
                    <input type="text"
                        id="usuarioBio"
                        value={usuarioBio}
                        onChange={e => setUsuarioBio(e.target.value)}
                    />
                    <Botoes>
                        <button>Salvar</button>
                        <button onClick={altCancel}>Cancelar</button>
                    </Botoes>

                </Editar>

            ) : (
                <div>
                    <Header>
                        <Voltar to={"/"}></Voltar>
                        <strong>usuario</strong>
                    </Header>

                    <Perfil>
                        <ImgPerfil src="" alt="" />
                        <Info>
                            <NomeUsuario>
                                <span>nome do Usuario</span>
                            </NomeUsuario>
                            <Dados>
                                <span> postagens</span>
                                <span> seguidores</span>
                                <span> seguindo</span>
                            </Dados>  
                        </Info>
                    </Perfil>

                    <BioUsuario>
                        <p>Bio</p>
                    </BioUsuario>

                    <Botoes>
                        <button onClick={altCampos}>editar perfil</button>
                        <button>mensagens</button>
                    </Botoes>
                    
                    <div>

                    </div>
                </div>
            )}
            <Footer></Footer>
        </Container>
    )
}
export default Usuario;

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
`;

const Voltar = styled(Link)`
  width: 18px;
  height: 18px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  transform: rotate(-45deg);
  display: inline-block;
  cursor: pointer;
`;

const Perfil = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ImgPerfil = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #ccc ;
  object-fit: cover;
`;

const NomeUsuario = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    span {
        font-weight: bold;
        font-size: 18px;
    }
`;

const Dados = styled.div`
    display: flex;
    gap: 20px;
    font-size: 14px;
    span {
        font-weight: 500;
    }
`;

const BioUsuario = styled.div`
    font-size: 14px;
    margin-top: 16px;
`;

const Botoes = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 16px;

    button {
        padding: 8px 14px;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        font-weight: 500;
    }
`;

const Editar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    label {
        font-size: 14px;
        font-weight: 500;
    }
    input {
        padding: 8px;
        border-radius: 6px;
        border: 1px solid #ccc;
    }
`;

