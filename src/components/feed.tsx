import styled from "styled-components";
import React, { useState } from "react";
import api from "../services/api.ts";
import { Link, useNavigate, useParams } from "react-router-dom";

function Feed() {
    const [isSeguindo, setSeguindo] = useState<boolean>(false);
    const navigate = useNavigate();
    const verPerfil = () => {
        navigate(`/usuario/`);;
    }

    const postagensUsuarios = async () => {
    try {
      const response = await api.get(`postagens/`)
      if (response.status === 201) {
         setSeguindo(true);
      } else {
        console.log("Fail loading data", response.status);
      }
    } catch (error) {
      console.error("Unexpected error!", error);
    }
  };
    return (
        <>
        <Container>
            <Busca>
                <input type="text" 
                     id="buscar-info"
                     placeholder="Pesquisar "
                />
                <div>
                    {isSeguindo ? (
                        <div></div>
                    ) : (
                        <p>Você não segue nenhum perfil</p>
                    )}     
                </div>
            </Busca>
            <div>
                <button onClick={verPerfil}>Perfil</button>
            </div>
        </Container>
            
        </>
    )
}
export default Feed;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
`;

const Busca = styled.div`
  margin-bottom: 16px;

  input {
    width: 100%;
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
  }
`;
