import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
    const movie=useSelector(store=>store.movie.movies);
    const upcoming=useSelector(store=>store.movie.upcoming);
    const topRated=useSelector(store=>store.movie.topRated);
    const popular=useSelector(store=>store.movie.popular);
    console.log(upcoming,'upcon');
    console.log(topRated,'top');
    console.log(popular,'popular');
    console.log(movie,'movie');
    
    
    
    
  return (
    <div className='bg-black'>

   
    <div className='-mt-30 relative z-12'>
       <MovieList title="Now Playing" movies={movie}></MovieList>
       <MovieList title="Top Rated" movies={movie}></MovieList>
       
         <MovieList title="UpComing" movies={movie}></MovieList>
          <MovieList title="Popular" movies={movie}></MovieList>
           

       
    </div>
     </div>
  )
}

export default SecondaryContainer