import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiSearch } from 'react-icons/fi';
import './styles.css';

const Home = () => {

  if (!localStorage.getItem('movies-imdb')) {
    localStorage.setItem('movies-imdb', '')
  } 
  
  return (
    <div id="page-home">
      <div className="content">
        <main>
          <h1>Cinema APP</h1>
          <p>Bem-vindo ao mundo espetacular do cinema.</p>

          <div className="buttons-container">

            <Link to="/buscar">
              <span><FiSearch /></span>
              <strong>Buscar Filmes</strong>
            </Link>
            <Link to="/favoritos">
              <span><FiStar /></span>
              <strong>Ver Favoritos</strong>
            </Link>
          
          </div> 
        </main>
      </div>
    </div>
  );
}

export default Home;