import React from 'react';
import Home from './paginas/home/Home';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { Grid } from '@material-ui/core';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path='/' element={<Login />} />

          <Route path='/login' element={<Login />} />

          <Route path='/home' element={<Home />} />

          <Route path='/cadastro' element={<CadastroUsuario />} />

          <Route path='/temas' element={<ListaTema />} />

          <Route path='/posts' element={<ListaPostagem />} />

        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;