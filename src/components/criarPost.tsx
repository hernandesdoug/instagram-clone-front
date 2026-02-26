import { useState } from "react";
import api from "../services/api.ts";
import { useNavigate } from "react-router-dom";
import { Container,  Botoes,  } from "../assets/css/criarPost.tsx";

const CriarPost = () => {
  const [foto, setFoto] = useState<File | null>(null);
  const [legenda, setLegenda] = useState("");
  const navigate = useNavigate();

  const cancelaPost = () => {
    setLegenda("");
    const usuarioNome = localStorage.getItem("usuario-nome");
    navigate(`/usuario/${usuarioNome}`);
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
        setFoto(null);
        setLegenda("");
      }
    } catch (error) {
      console.error("Unexpected error!", error);
    }
  };

  return (

    <Container>
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
 
    </Container>
  );
};

export default CriarPost;