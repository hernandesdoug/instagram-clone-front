import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
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

export const FotoPost = styled.img`
  width: 80px;
  height: 80px;
  border: 1px solid #ccc ;
  object-fit: contain;
`;
