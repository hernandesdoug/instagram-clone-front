import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    padding: 20px;
`;

export const Voltar = styled(Link)`
  width: 18px;
  height: 18px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  transform: rotate(-45deg);
  display: inline-block;
  cursor: pointer;
`;

export const BtnLogout = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    margin-left: 20px;
`;   

export const Perfil = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 0 10px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
`;

export const ImgPerfil = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #ccc ;
  object-fit: contain;
`;

export const NomeUsuario = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    span {
        font-weight: bold;
        font-size: 18px;
    }
`;

export const Dados = styled.div`
    display: flex;
    gap: 18px;
    font-size: 13px;
    span {
        font-weight: 500;
        white-space: nowrap;
    }
`;

export const BioUsuario = styled.div`
    font-size: 14px;
    line-height: 1.4;
    padding: 0 10px;
`;

export const Botoes = styled.div`
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

export const Editar = styled.div`
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

export const Campo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
`;

export const ConteudoPerfil = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const AreaPostagens = styled.div`
  margin-top: 24px;
  border-top: 1px solid #eee;
  padding-top: 24px;
`;

export const SemPostagens = styled.div`
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