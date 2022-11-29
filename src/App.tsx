import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          
          <Route path='/home' element={<Home />} />

          <Route path='/login' element={<Login />} />

        </Routes>
        <Footer />

      </Router>

    </>
  );
}

export default App;
