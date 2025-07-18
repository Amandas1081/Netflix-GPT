import React, { useState } from 'react'
import Header from './Header'

function Login() {
  const [isSignform,setSignform]=useState(true);

  return (
    <>
   <div>
      <Header></Header>
      <div className='absolute'>
      <img className='' src='https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg'></img>
      </div>
      <form className=' absolute my-32 mx-auto right-0 left-0  bg-gray-200 h-[400px] w-[500px] flex flex-col justify-center items-center '>
       {isSignform? <p>Sign in</p>: <p>Sign up</p>}
       { !isSignform &&
              <div className=' m-2  '>
            <label >Name</label>
            <input className='border rounded-lg' type='text'></input>
            
          </div>
          }
        <div className='m-2 mb-4  '>
        <label>EMail</label>
        <input className='border rounded-lg' type='text'></input>

          </div>
          
          <div className=' m-2  '>
            <label >Password</label>
            <input className='border rounded-lg' type='text'></input>
            
          </div>
        <button className='w-2/4 mt-2 border rounded-lg px-2'>SUbmit</button>
       { isSignform? <p className='mt-2' onClick={()=>setSignform(prev=>!prev)}>New to Netflix signUp Now..</p>:<p className='mt-2' onClick={()=>setSignform(prev=>!prev)}>Already User SignIn..</p>}
      </form>
    </div>

   
    </>
  )
}

export default Login