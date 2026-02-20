import { Container, FeedUsuarios } from "../assets/css/feed.tsx";
import { useState } from "react";
import Footer from "./footer.tsx";
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
            <FeedUsuarios>
              <div>
                
              </div>
                <div>
                    {isSeguindo ? (
                        <div></div>
                    ) : (
                        <p>Você não segue nenhum perfil</p>
                    )}     
                </div>
            </FeedUsuarios> 
            <Footer></Footer>
        </Container>
            
        </>
    )
}
export default Feed;


