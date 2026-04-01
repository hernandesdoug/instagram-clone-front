import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
`;

export const CamposSenha = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    margin: 10px;
`;

export const Inputs = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 0.2rem;
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