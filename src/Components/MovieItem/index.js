import React, { useState } from 'react';
import { FiStar } from 'react-icons/fi';

import './styles.css';

const MovieItem = ({ movie, fav }) => {

  const [favorite, setFavorite] = useState(fav);

  function createFavorite() {

    let itens = localStorage.getItem('movies-imdb');

    if (itens.length > 0) {

      let arItens = itens.split(',');
      let index = arItens.indexOf(movie.imdbID);

      if (index > -1) {
        
        arItens.splice(index, 1);
        setFavorite(false);

      } else {
        
        arItens.push(movie.imdbID);
        setFavorite(true);
      }

      itens = arItens.join();

    } else {
      
      itens = `${movie.imdbID}`;
      setFavorite(true);
    } 
    
    localStorage.setItem('movies-imdb', itens);
  }

  return (
    <article className="movie-item">
      <header>
        <div>
          <strong>{movie.Title}</strong>
          <p><span>Ano: {movie.Year}</span></p>
        </div>
      </header>

      <aside>
        <a onClick={createFavorite} target="_blank" className={favorite ? 'favon' : 'favoff'}>
          <span><FiStar /></span>
        </a>
        <p>{favorite ? 'remover' : 'favoritar'}</p>
      </aside>
    </article>
  );
}

export default MovieItem;