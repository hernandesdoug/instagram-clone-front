import { FooterPage, FooterIcon } from '../assets/css/footer';
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

