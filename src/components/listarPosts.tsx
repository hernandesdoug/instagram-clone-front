import { useState, useEffect } from "react";
import api from "../services/api.ts";
import { useNavigate } from "react-router-dom";
import type { Posts, CriarPostProps } from "./criarPost.ts";
import { Container, AreaPostagens, UsuarioPostagens, SemPostagens, 
         FotoPost, FotoCard } from "../assets/css/criarPost.tsx";

const ListarPosts = ({usuarioId}: CriarPostProps) => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const navigate = useNavigate();
  const buscaPost = async () => {
    try {
   
      const response = await api.get<Posts[]>(`/post/${usuarioId}`);
      if (response.status === 200) {
          setPosts(response.data);     
      } else {
        console.log("Data recover Failed!", response.status);
      }
    } catch (error) {
      console.error("Unexpected error!", error);
    }
  }

  useEffect(() => {
    if (usuarioId) {
      buscaPost()
    }
  }, [usuarioId])

  return (

    <Container>
      {posts.length === 0 ? (
        <AreaPostagens>
          <SemPostagens>
            <p>Ainda não há nenhum post</p>
              <button onClick={() => navigate("/post")}>Criar</button>         
          </SemPostagens>
        </AreaPostagens>
      ) :  (
        <UsuarioPostagens>
         {posts.map(post => (
          <FotoCard key={post.FOTO_ID} >
            <FotoPost src={`http://localhost:3333/uploads/${post.FOTO_POSTAGEM}`} alt="post"/>
            <p>{post.LEGENDA_FOTO}</p>
          </FotoCard>
         ))}
        </UsuarioPostagens>
      )}
    </Container>
  );
};

export default ListarPosts;