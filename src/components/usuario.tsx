import { Container , Editar, ImgPerfil, Campo, Botoes, ConteudoPerfil,
         Voltar, BtnLogout, Perfil, Header, Info, Dados, BioUsuario,
         NomeUsuario} from "../assets/css/usuario.tsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api.ts";
import Footer from "./footer.tsx";
import type { usuarioProps } from "./usuario.ts";
import CriarPost from "./criarPost.tsx"

import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Usuario =  () => {
    const [idUsuario, setIdUsuario] = useState<number>();
    const [infoContato, setInfoContato] = useState<string>("");
    const [nomeUsuario, setNomeUsuario] = useState<string>("");
    const [descricaoBio, setDescricaoBio] = useState<string>("");
    const [fotoPerfil, setFotoPerfil] = useState<File | null>(null);
    const [fotoPreview, setFotoPreview] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [nomeCompleto, setNomeCompleto] = useState<string>("");
    const [isEditing, setEditing] = useState<boolean>(false);
    const [isPerfil, setPerfil] = useState<boolean>(false);
    const [isSeguindo, setSeguindo] = useState<boolean>(false);
    const [numPostagens, setNumPostagens] = useState<number>(0);
    const [seguidores, setNumSeguidores] = useState<number>(0);
    const [seguindo, setNumSeguindo] = useState<number>(0);
    const params = useParams();
    const navigate = useNavigate();
    
   
    const altCampos = () => {
        setEditing(!isEditing);
    }

    const altCancel = () => {
        setEditing(false);
    }

    const seguirPerfil = async () => {
         
         const usuarioId = localStorage.getItem("usuario-id")
         try {  
            const response = await api.post("/seguir", {idUsuario, usuarioId});
            if (response.status === 201 || response.status === 200) {
                setSeguindo(response.data.isSeguindo)
                console.log(response.data.isSeguindo);
            }

        } catch (error) {
            console.error("Unexpected error!", error);
        }
    }

    const logoutPerfil = () => {
        localStorage.clear();
        navigate("/");
    }
    const salvarDados = async () => {
        try {
            const formData = new FormData();
            formData.append("idUsuario", idUsuario!.toString());
            formData.append("infoContato", infoContato);
            formData.append("nomeCompleto", nomeCompleto);
            formData.append("nomeUsuario", nomeUsuario);
            formData.append("senha", senha);
            formData.append("descricaoBio", descricaoBio);
            if (fotoPerfil) {
                formData.append("avatar", fotoPerfil);
            }
            
            const response = await api.put(`/user/${idUsuario}`, formData);
            if (response.status === 200) {
                setEditing(false);
            }
        } catch (error) {
            console.error("Unexpected error!", error);
        }
    }
    const perfilUsuario = async () => {
        try {          
            const response = await api.get<usuarioProps>(`/user/${params.usuario}`);
            if (response.status === 200) {
                setInfoContato(response.data.INFOCONTATO);
                setNomeUsuario(response.data.NOMEUSUARIO);
                setDescricaoBio(response.data.DESCRICAOBIO);
                setFotoPreview(response.data.FOTOPERFIL);
                setSenha(response.data.SENHA);
                setNomeCompleto(response.data.NOMECOMPLETO);
                setIdUsuario(response.data.ID);
                setNumSeguidores(response.data.seguidores);
                setNumSeguindo(response.data.seguindo);
                setNumPostagens(response.data.postagens);
                const usuarioNome = localStorage.getItem("usuario-nome");
                localStorage.setItem("usuario-foto", response.data.FOTOPERFIL);
                setPerfil(usuarioNome === response.data.NOMEUSUARIO);
            } else {
                console.log("Data recover Failed!", response.status);
            }
        } catch (error) {
            console.error("Unexpected error!", error);
        }
    }

    useEffect(() => {
        perfilUsuario();
    }, [params.usuario])

    return (

        <Container>
            {isEditing ? (
                <Editar>
                    <ImgPerfil src={`http://localhost:3333/uploads/${fotoPreview}`} alt="Foto de perfil" />
                    <Campo>
                        <label htmlFor="foto">Foto Perfil</label>
                        <input
                            type="file"
                            id="foto"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    setFotoPerfil(file); 
                                    setFotoPreview(URL.createObjectURL(file));
                                }
                            }}       
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
                            value={descricaoBio}
                            onChange={e => setDescricaoBio(e.target.value)}
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
                        <BtnLogout onClick={logoutPerfil}><FaSignOutAlt /></BtnLogout>
                    </Header>

                    <Perfil>
                        <ImgPerfil src={`http://localhost:3333/uploads/${fotoPreview}`} alt="Foto de perfil" />
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
                                    <button onClick={seguirPerfil}>
                                        {isSeguindo ? "Seguindo" : "Seguir"}
                                    </button>
                                )}
                            </Botoes>
                        </Info>
                    </Perfil>

                    <BioUsuario>
                        <p>{descricaoBio}</p>
                    </BioUsuario>
                    <CriarPost usuarioId={idUsuario}></CriarPost>
                </ConteudoPerfil>
            )
            }
            <Footer></Footer>
        </Container >
    )
}
export default Usuario;

