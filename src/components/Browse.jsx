import React, { useEffect } from 'react'
import Header from './Header'
import { options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { AddMovies } from '../utils/movieSlice';
import Movies from '../utils/Movies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';

function Browse() {
    const search=useSelector(state=>state.search.showGpt);
    console.log(search);
    
    Movies();
    useEffect(()=>{
       
    },[])
     const movie=useSelector(state=>state.movie.movies);
     if(!movie)return null;
     console.log(movie, 'movies');
     
  return (
    <div>
        <Header></Header>
        {
            search ===true? <GptSearch></GptSearch>:<>
             <MainContainer></MainContainer>
         <SecondaryContainer></SecondaryContainer>
            </>
        }
       
       
        </div>
  )
}

export default Browse