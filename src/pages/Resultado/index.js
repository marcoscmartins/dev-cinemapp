import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import MovieItem from '../../Components/MovieItem';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Resultados = (props) => {

  const [movies, setMovies] = useState([]);
  const [imdb, setIMDB] = useState([]);

  useEffect(() => {
    const itens = localStorage.getItem('movies-imdb');
    if (itens.length) {
      const imdb = itens.split(',');
      setIMDB(imdb);
    }
  }, []);

  useEffect(() => {
    setMovies(props.location.state.movies);
  }, []);

  return (
    <div id="page-resultado">
      <header className="header-resultado">
        <Link to='/buscar'>
          <FiArrowLeft />
          Voltar para a busca
        </Link>
        <Link to={{ pathname:'/favoritos', state:{movies} }}>
          Ir para Favoritos
          <FiArrowRight />
        </Link>
      </header>

      
      <main className="movie-result" >
        <h1>Filmes encontrados ({movies.length})</h1>
        {
          movies.map(movie => {
            let fav = imdb.includes(movie.imdbID);
            return <MovieItem key={movie.imdbID} movie={movie} fav={fav} />
          })
        }
      </main>

    </div>
  );
}

export default Resultados;