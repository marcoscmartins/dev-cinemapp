import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';
import MovieItem from '../../Components/MovieItem';

const Favoritos = (props) => {

  const [movies, setMovies] = useState([]);
  const [imdb, setIMDB] = useState([]);

  useEffect(() => {
    const itens = localStorage.getItem('movies-imdb');
    if (itens.length) {
      const imdb = itens.split(',');
      setIMDB(imdb);
      searchMovies(imdb);
    }
  }, []);

  const searchMovies = async function(imdb) {
    let mov = [];
    for (let i = 0; i < imdb.length; i++) {
      let movie = await searchMovie(imdb[i]);
      mov.push(movie)
    }

    setMovies(mov);
  }
  
  async function searchMovie(imdb) {

    let movie = await api.get(`http://www.omdbapi.com/?apikey=925eba28&i=${imdb}`)
    .then(response => {
      return response
    })
    .catch(err => {
      alert(`Erro na busca. ${err}`);
    });
    return movie.data;
  }

  return (
    <div id="page-favoritos">
      <header>
        <Link to='/buscar'>
          <FiArrowLeft />
          Voltar para a busca
        </Link>
      </header>
      <main className="movie-result" >
        <h1>Filmes favoritos</h1>
        {
          movies.map(movie => {
            return <MovieItem key={movie.imdbID} movie={movie} fav={true} />
          })
        }
      </main>

    </div>
  );
}

export default Favoritos;