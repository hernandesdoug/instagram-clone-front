import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/login.tsx";
import Cadastro from "../src/components/cadastro.tsx";
import Usuario from "./components/usuario.tsx";
import Feed from "./components/feed.tsx";
import Pesquisa from "./components/pesquisa.tsx";

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/cadastro" element={<Cadastro />}/>
      <Route path="/usuario/:usuario" element={<Usuario />}/>
      <Route path="/feed" element={<Feed />}/>
      <Route path="/pesquisa" element={<Pesquisa />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
