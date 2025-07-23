import React, { useEffect, useState } from "react";
import { options } from "../utils/constants";
import VideoHook from "../utils/VideoHook";

function VideoBackground({ id }) {
  const [trailer, setTrailer] = useState(null);
    const videossss=VideoHook();
    console.log(videossss);
    
  function backgroundVideo() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
            
        setTrailer(res.results.filter((arr)=>arr.type ==="Trailer"));
      })
      .catch((err) => console.error(err));
  }
 
  useEffect(() => {
    backgroundVideo();
  }, []);

  if(!trailer)return null;

  return <div className='w-screen'>
    <iframe className="w-screen aspect-video" src={`https://www.youtube.com/embed/uPzOyzsnmio?autoplay=1&mute=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>;
}

export default VideoBackground;
