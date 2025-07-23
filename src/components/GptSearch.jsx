import React from 'react'
import { useSelector } from 'react-redux'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

function GptSearch() {
   
  return (
    <div>
         <div className='fixed -z-10'>
      <img className='h-screen w-screen' src='https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg'></img>
      </div>
      <div className=''>
    <GptSearchBar></GptSearchBar>
        <GptMovieSuggestion></GptMovieSuggestion>
      </div>
        
    </div>
  )
}

export default GptSearch