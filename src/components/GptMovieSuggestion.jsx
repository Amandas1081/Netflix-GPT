import React, { useEffect, useState } from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import SearchList from './SearchList';

function GptMovieSuggestion() {
  const {movieNames, movieResults}=useSelector(state=>state.searchMovies)
  // useEffect(()=>{

  // },[movie]);
  if(!movieNames)return null;




  return (
    <div className='bg-black bg-opacity-50 '>
      {
        movieNames.map((movie,ind)=>(
          <MovieList key={ind} title={movie} movies={movieResults[ind]}></MovieList>
        ))
      }
       
    </div>
  )
}

export default GptMovieSuggestion