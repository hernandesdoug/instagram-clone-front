import { useState, useEffect } from "react";
import api from "../services/api.ts";
import type { Posts, CriarPostProps } from "./criarPost.ts";
import { Container, AreaPostagens, SemPostagens, Botoes, FotoPost } from "../assets/css/criarPost.tsx";


const CriarPost = ({usuarioId}: CriarPostProps) => {
  const [foto, setFoto] = useState<File | null>(null);
  const [legenda, setLegenda] = useState("");
  const [isPosting, setPosting] = useState<boolean>(false);
  const [posts, setPosts] = useState<Posts[]>([]);


  const criarPost = () => {
    setPosting(true);
  }

  const cancelaPost = () => {
    setPosting(false);
    setLegenda("");
  }

  const salvarPost = async () => {
    try {
      const usuarioId = localStorage.getItem("usuario-id")

      const formData = new FormData();
      formData.append("usuarioId", String(usuarioId));
      formData.append("legendaFoto", legenda);
      if (foto) {
        formData.append("avatar", foto);
      }

      const response = await api.post("/post", formData);
      if (response.status === 201) {
        setPosting(false);
        setFoto(null);
        setLegenda("");
      }
    } catch (error) {
      console.error("Unexpected error!", error);
    }
  };

  const buscaPost = async () => {
  console.log("chamou busca")
    try {
   
      const response = await api.get<Posts[]>(`/post/${usuarioId}`);
      if (response.status === 200) {
         console.log(response.data)
          setPosts(response.data);     
      } else {
        console.log("Data recover Failed!", response.status);
      }
    } catch (error) {
      console.error("Unexpected error!", error);
    }
  }

  useEffect(() => {
    if (!isPosting && usuarioId) {
      buscaPost()
    }
  }, [isPosting, usuarioId])

  return (

    <Container>
      {isPosting ? (
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setFoto(file);
              }
            }}
          />
          <textarea
            value={legenda}
            onChange={e => setLegenda(e.target.value)}
          />
          <Botoes>
            <button onClick={salvarPost}>Postar</button>
            <button onClick={cancelaPost}>Cancelar</button>
          </Botoes>

        </div>
      ) : posts.length === 0 ? (
        <AreaPostagens>
          <SemPostagens>
            <p>Ainda não há nenhum post</p>
              <button onClick={criarPost}>Criar</button>         
          </SemPostagens>
        </AreaPostagens>
      ) :  (
        <AreaPostagens>
         {posts.map(post => (
          <div key={post.FOTO_ID} >
            <FotoPost src={`http://localhost:3333/uploads/${post.FOTO_POSTAGEM}`} alt="post"/>
            <p>{post.LEGENDA_FOTO}</p>
          </div>
         ))}
        </AreaPostagens>
      )}
    </Container>
  );
};

export default CriarPost;