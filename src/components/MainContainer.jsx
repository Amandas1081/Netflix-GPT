import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import SecondaryContainer from './SecondaryContainer';

function MainContainer() {
    const movies=useSelector(state=>state.movie.movies);
    console.log(movies,'moviesssss');

    
    
  return (
    <div>
        <VideoTitle data={movies[0]}></VideoTitle>
        <VideoBackground id={movies[0].id}></VideoBackground>
       
    </div>
  )
}

export default MainContainer