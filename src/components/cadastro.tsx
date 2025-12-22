import type { cadastroProps } from "./cadastro.ts";
import React, { useState } from 'react';
import Footer from "./footer.tsx";

const Cadastro: React.FC = () => {
    const [usuario, setUsuario] = useState<cadastroProps>();
    const [senha, setSenha] = useState<cadastroProps>();
    const [nomeCompleto, setNomeCompleto] = useState<cadastroProps>();
    const [nomeUsuario, setNomeUsuario] = useState<cadastroProps>();
    
     const handleCadastro = () => {
        
    }
    return (
        <>
        <div>
            <div>

            </div>
            <div>
                
            </div>
            <Footer></Footer>
        </div>
        </>
    )
}

export default Cadastro;