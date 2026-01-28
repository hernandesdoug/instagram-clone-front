import styled from "styled-components";
import React, { useState } from "react";
import Footer from "./footer.tsx";
import api from "../services/api.ts";
import { Link, useNavigate, useParams } from "react-router-dom";

function Pesquisa() {
    return (
        <>
            <Container>
                <Busca>
                    <input type="text"
                        id="buscar-info"
                        placeholder="Pesquisar "
                    />
                </Busca>
                <Footer></Footer>
            </Container>

        </>
    )
}
export default Pesquisa;

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