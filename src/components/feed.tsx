import { Container, FeedUsuarios } from "../assets/css/feed.tsx";
import { useState, useEffect } from "react";
import Footer from "./footer.tsx";
import api from "../services/api.ts";
import type { Posts } from "./criarPost.ts";

function Feed() {

  const [postagens, setPostagens] = useState<Posts[]>([]);
  const postagensUsuarios = async () => {
    try {
      const response = await api.get("/post")
      if (response.status === 200) {
          setPostagens(response.data.postagens)
      } else {
        console.log("Fail loading data", response.status);
      }
    } catch (error) {
      console.error("Unexpected error!", error);
    }
  };

  useEffect(() => {
      postagensUsuarios();
    }, [])
  return (
    <>
      <Container>
        <FeedUsuarios>
          <div>
            {!postagens || postagens.length === 0 ? (
              <p>Você não segue nenhum perfil</p>
            ) : (
              <div>
                {postagens.map((post) => (
                  <div key={post.FOTO_ID}>
                    <img src={`http://localhost:3333/uploads/${post.FOTO_POSTAGEM}`} alt="post" />
                    <p>{post.LEGENDA_FOTO}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </FeedUsuarios>
        <Footer></Footer>
      </Container>

    </>
  )
}
export default Feed;


