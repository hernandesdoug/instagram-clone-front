import styled from "styled-components";
import { useState, useEffect } from "react";
import api from "../services/api.ts";
import type { CriarPostProps } from "./criarPost.ts";

const CriarPost = () => {
  const [idUsuario, setIdUsuario] = useState<number>();
  const [foto, setFoto] = useState<File | null>(null);
  const [legenda, setLegenda] = useState("");

  const criarPost = async () => {
    try {

      const formData = new FormData();
      formData.append("idUsuario", idUsuario!.toString());
      formData.append("legenda", legenda);
      if (foto) {
        formData.append("avatar", foto);
      }

      const response = await api.post(`/posts/`, formData);
      if (response.status === 200) {

      }
    } catch (error) {
      console.error("Unexpected error!", error);
    }

  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setFoto(file);
          }}
        }/>

      < textarea
          value = { legenda }
          onChange = { e => setLegenda(e.target.value)}
      />

      <button onClick={criarPost}>Postar</button>
      <button>Cancelar</button>
    </>
  );
};

export default CriarPost;