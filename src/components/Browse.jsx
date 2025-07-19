import React, { useEffect } from 'react'
import Header from './Header'
import { options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { AddMovies } from '../utils/movieSlice';
import Movies from '../utils/Movies';
import MainContainer from './MainContainer';

function Browse() {
    Movies();
    useEffect(()=>{
       
    },[])
     const movie=useSelector(state=>state.movie.movies);
     if(!movie)return null;
     console.log(movie, 'movies');
     
  return (
    <div>
        <Header></Header>
        <MainContainer></MainContainer>
        </div>
  )
}

export default Browse