import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Login from "./pages/Login/Login"
import ResetarSenha from "./pages/ResetarSenha/ResetarSenha";
import Registrar from "./pages/Registrar/Registrar"
import CadastrarProduto from "./pages/CadastrarProduto/CadastrarProduto"

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login/>}/>

        <Route path="/resetar-senha" element={<ResetarSenha/>}/>

        <Route path="/cadastrar-usuario" element={<Registrar/>}/>

        <Route path="/cadastrar-produto" element={<CadastrarProduto/>}/>

      </Routes>
    </Router>
    
  )
}

export default App;