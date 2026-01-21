import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../services/api.ts";
import Footer from "./footer.tsx";
import type { usuarioProps } from "./usuario.ts";


const Usuario: React.FC = () => {
    const [idUsuario, setIdUsuario] = useState<number>();
    const [infoContato, setInfoContato] = useState<string>("");
    const [nomeUsuario, setNomeUsuario] = useState<string>("");
    const [usuarioBio, setUsuarioBio] = useState<string>("");
    const [fotoPerfil, setFotoPerfil] = useState<File | string>("");
    const [senha, setSenha] = useState<string>("");
    const [nomeCompleto, setNomeCompleto] = useState<string>("");
    const [isEditing, setEditing] = useState<boolean>(false);
    const [isPerfil, setPerfil] = useState<boolean>(true);
    const [isPosting, setPosting] = useState<boolean>(false);
    const [numPostagens, setNumPostagens] = useState<number>(0);
    const [seguidores, setNumSeguidores] = useState<number>(0);
    const [seguindo, setNumSeguindo] = useState<number>(0);
    const navigate = useNavigate();
    const params = useParams();

    const altCampos = () => {
        setEditing(!isEditing);
    }

    const altCancel = () => {
        setEditing(false);
    }

    const seguirUsuario = () => {
        setPerfil(true);
    }
    const salvarDados = async () => {
        try {
            const formData = new FormData();
            formData.append("idUsuario", idUsuario!.toString());
            formData.append("infoContato", infoContato);
            formData.append("nomeCompleto", nomeCompleto);
            formData.append("nomeUsuario", nomeUsuario);
            formData.append("senha", senha);
            formData.append("usuarioBio", usuarioBio);
            formData.append("avatar", fotoPerfil);
            console.log(idUsuario);
            const response = await api.put(`/user/${idUsuario}`, formData);
            if (response.status === 200) {
                navigate(`/usuario/${response.data.NOMEUSUARIO}`);
            }
        } catch (error) {
            console.error("Unexpected error!", error);
        }
    }
    const perfilUsuario = async () => {
        try {
            const response = await api.get<usuarioProps>(`/user/${params.usuario}`);
            if (response.status === 200) {
                console.log(response.data);
                setInfoContato(response.data.INFOCONTATO);
                setNomeUsuario(response.data.NOMEUSUARIO);
                setUsuarioBio(response.data.DESCRICAOBIO);
                setFotoPerfil(response.data.FOTOPERFIL);
                setSenha(response.data.SENHA);
                setNomeCompleto(response.data.NOMECOMPLETO);
                setIdUsuario(response.data.ID);
                setNumSeguidores(response.data.seguidores);
                setNumSeguindo(response.data.seguindo);

            } else {
                console.log("Data recover Failed!", response.status);
            }
        } catch (error) {
            console.error("Unexpected error!", error);
        }
    }

    useEffect(() => {
        perfilUsuario();
    }, [])

    return (

        <Container>
            {isEditing ? (
                <Editar>
                    <ImgPerfil src="" alt="" />
                    <Campo>
                        <label htmlFor="foto">Foto Perfil</label>
                        <input
                            type="file"
                            id="foto"
                            onChange={e => setFotoPerfil(e.target.files?.[0]!)}
                        />
                    </Campo>
                    <Campo>
                        <label htmlFor="usuario">Email ou telefone</label>
                        <input type="text"
                            id="usuario"
                            value={infoContato}
                            onChange={e => setInfoContato(e.target.value)}
                        />
                    </Campo>
                    <Campo>
                        <label htmlFor="nome-usuario">Nome Usuario</label>
                        <input type="text"
                            id="nome-usuario"
                            value={nomeUsuario}
                            onChange={e => setNomeUsuario(e.target.value)}
                        />
                    </Campo>
                    <Campo>
                        <label htmlFor="usuarioBio">Bio</label>
                        <input type="text"
                            id="usuarioBio"
                            value={usuarioBio}
                            onChange={e => setUsuarioBio(e.target.value)}
                        />
                    </Campo>

                    <Botoes>
                        <button onClick={salvarDados}>Salvar</button>
                        <button onClick={altCancel}>Cancelar</button>
                    </Botoes>

                </Editar>

            ) : (
                <ConteudoPerfil>
                    <Header>
                        <Voltar to={"/feed"}></Voltar>
                        <strong>{nomeUsuario}</strong>
                    </Header>

                    <Perfil>
                        <ImgPerfil src={fotoPerfil as string} />
                        <Info>
                            <NomeUsuario>
                                <span>{nomeCompleto}</span>
                            </NomeUsuario>
                            <Dados>
                                <span>{numPostagens} postagens</span>
                                <span>{seguidores} seguidores</span>
                                <span>{seguindo} seguindo</span>
                            </Dados>
                            <Botoes>
                                {isPerfil ? (
                                    <button onClick={altCampos}>editar perfil</button>
                                ) : (
                                    <button onClick={seguirUsuario}>Seguir</button>
                                )}
                            </Botoes>
                        </Info>
                    </Perfil>

                    <BioUsuario>
                        <p>{usuarioBio}</p>
                    </BioUsuario>

                    <AreaPostagens>
                        {isPosting ? (
                            <div></div>
                        ) : (
                            <SemPostagens>
                                <p>Ainda não há nenhum post</p>
                                <button>Criar</button>
                            </SemPostagens>
                        )}

                    </AreaPostagens>
                </ConteudoPerfil>
            )
            }
            <Footer></Footer>
        </Container >
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
    padding: 20px;
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
    gap: 24px;
    padding: 0 10px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
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
    gap: 18px;
    font-size: 13px;
    span {
        font-weight: 500;
        white-space: nowrap;
    }
`;

const BioUsuario = styled.div`
    font-size: 14px;
    line-height: 1.4;
    padding: 0 10px;
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
    padding: 20px;
    gap: 8px;

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

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
`;

const ConteudoPerfil = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const AreaPostagens = styled.div`
  margin-top: 24px;
  border-top: 1px solid #eee;
  padding-top: 24px;
`;

const SemPostagens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #777;

  button {
    padding: 8px 18px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-weight: 500;
  }
`;