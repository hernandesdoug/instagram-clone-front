import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/login.tsx";
import Cadastro from "../src/components/cadastro.tsx";
import Usuario from "./components/usuario.tsx";

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/cadastro" element={<Cadastro />}/>
      <Route path="/usuario" element={<Usuario />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
