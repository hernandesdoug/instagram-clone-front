import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const LandingImg = styled.div`
   width: 50%;
   object-fit: cover;
`;
export const LoginPage = styled.div`
    width: 50%;
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

export const BtnEntrar = styled.button`
  width: 250px;
  height: 30px;
  border-radius: 0.4rem;
  background-color: #00a2ff;
  color: #ffffff;
`;
