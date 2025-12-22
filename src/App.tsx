import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/login.tsx";
import Cadastro from "../src/components/cadastro.tsx";

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/cadastro" element={<Cadastro />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
