import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

const Buscar = () => {

  const history = useHistory();
  const [name, setName] = useState('');
  const [movies, setMovies] = useState([]);

  async function handleSubmit(event) {

    event.preventDefault();
    
    await api.get(`http://www.omdbapi.com/?apikey=925eba28&s=${name}`)
    .then(response => {
        if (!!response.data.Search) {
          setMovies(response.data.Search)
          history.push({
            pathname: `/resultado`,
            state: { movies: response.data.Search },
          });
          console.log(movies);
        }
    })
    .catch(err => {
        alert(`Erro na busca. ${err}`);
    });
  }

  return (
    <div id="page-buscar">
      <header>
        <Link to='/'>
          <FiArrowLeft />
          Voltar para home
        </Link>
        <Link to='/favoritos'>
          Ir para Favoritos
          <FiArrowRight />
        </Link>
      </header>

      <form onSubmit={handleSubmit}>
        
        <h1>Busque seus filmes favoritos</h1>

        <div className="field">
          <label htmlFor="name">Nome do filme</label>
          <input 
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              setName(e.target.value)
            }} 
          />
        </div>        
        <button type="submit">Buscar</button>
      </form>

    </div>
  );
}

export default Buscar;