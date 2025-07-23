import React from 'react'

function VideoTitle({data}) {
    const {original_title, overview}=data
  return (
    <div className='w-screen aspect-video text-white pt-70 px-4 absolute bg-gradient-to-r from-black'>
        {/* <div className='pl-6 absolute top-140 text-white'> */}
        <p className='ml-10 font-bold text-5xl'>{original_title}</p>
        <p className='ml-10 py-6  w-1/4'>{overview}</p>
        <div className='ml-4'>
            <button className='border px-[50px] py-[10px] mx-4 text-2xl bg-white text-black'>Play</button>
            <button className='border px-[50px] py-[10px]  text-2xl bg-gray-300 text-black'>More Info</button>
            {/* </div> */}
        </div>
    </div>
  )
}

export default VideoTitle