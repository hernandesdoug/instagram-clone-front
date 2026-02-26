import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
`;

export const ImgPerfil = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ccc ;
  object-fit: contain;
`;

export const ListaSeg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const UsuarioInfo = styled.div`
    display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #f2f2f2; 
  }
`;

export const NomeUsuario = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const NomeCompleto = styled.p`
  font-size: 14px;
  color: #8b8b8b;
`;

export const BtnSeg = styled.button`
        padding: 8px 14px;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        font-weight: 500;
  
`;