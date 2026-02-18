import styled from 'styled-components';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


function Footer() {
    const [nomeUsuario, setNomeUsuario] = useState("");

    useEffect(() => {
        const usuario = localStorage.getItem("usuario-nome");
        setNomeUsuario(usuario ?? "");
    }, [])
    return (
        <>
            <FooterPage>
                <FooterIcon>
                    <Link to={'/feed'}>
                        <FaHome />
                    </Link>
                    <Link to={'/pesquisa'}>
                        <FaSearch />
                    </Link>
                    <Link to={`/usuario/${nomeUsuario}`}>
                        <FaUser />
                    </Link>
                </FooterIcon>
                <div>
                    © 2025 Instagram Clone project by <a href="https://github.com/hernandesdoug">Douglas Hernandes</a>
                </div>

            </FooterPage>
        </>
    )
}
export default Footer;

const FooterPage = styled.footer`
  position: fixed;
  bottom: 0;
  margin: 10px 0 0;
  padding: 10px;
  text-align: center;
  width: 600px;
`;

const FooterIcon = styled.div`
    justify-content: space-around;
    display: flex;
    cursor: pointer;
`;