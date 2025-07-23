import React from 'react'

function MovieList({title,movies}) {
  return (
<div className='mx-5  pt-6 '>
     <p className='text-white py-2  pl-4 text-2xl'>{title}</p>
    <div className=' overflow-x-scroll '>
       
        <div className=' flex flex-row'>
        {
            movies.map((arr)=>(
              <>
          {  arr?.poster_path &&    <img className='h-[210px] mx-3' src={`https://image.tmdb.org/t/p/w500${arr.poster_path}`}></img>}
          </>
            ))
        }
        </div>
    </div>
    </div>
  )
}

export default MovieList