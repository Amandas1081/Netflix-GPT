import React from 'react'

function SearchList({title,movies}) {
  return (

    <div className='flex flex-row items-center justify-center  bg-gradient-to-b from-black '>
       
        <div className=' flex flex-wrap m-26 '>
        {
            movies.map((arr)=>(
              <>
              {
                arr.map(a=>(
                  <>
                  {a.poster_path && <img className='h-[210px] mx-3' src={`https://image.tmdb.org/t/p/w500${a.poster_path}`}></img> }
                  </>
                ))
              }
              </>
               
            ))
        }
        </div>
    </div>
  )
}

export default SearchList