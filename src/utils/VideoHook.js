import React, { useEffect, useRef, useState } from 'react'
import { options } from './constants';

function VideoHook(id) {
  const [trailer, setTrailer] = useState(null);
    const tt=useRef('null');
  function backgroundVideo() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
         const v=   res.results.filter((arr)=>arr.type ==="Trailer");
        tt.current =v;

      })
      .catch((err) => console.error(err));
  }
 
  useEffect(() => {
     backgroundVideo();
  }, []);

//   if(trailer)return null;

console.log(trailer,'trailer');
  console.log(tt.current.value);
  
  return '12';

}

export default VideoHook