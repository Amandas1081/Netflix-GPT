import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validate';
import { auth } from '../utils/firebase';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Login() {
  const [isSignform,setSignform]=useState(true);

  const [error,setError]=useState(null);
  const email=useRef();
  const password=useRef();
  const name=useRef();
  const navigate =useNavigate();
  const user=useSelector(state =>state.user);
  useEffect(()=>{
    if(user !==null){
      navigate('/browse')
    }
  },[])



  function handleButtonClick(){

    let email1=email.current.value;
    let password1=password.current.value

    const ans=validate(email.current.value,password.current.value)
    // console.log(email,password);
    // console.log(ans);
    setError(ans);
    if(!isSignform){

      createUserWithEmailAndPassword(auth, email1, password1)
      .then((userCredential) => {
        // Signed up 
        const user=userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          // Profile updated!
         
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
          setError(error.message);
        });
        // const user = userCredential.user;
        console.log(user);
       
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode+errorMessage)
        // ..
      });
      }else{
        signInWithEmailAndPassword(auth, email1, password1)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode+errorMessage)
        });
      }
    

  }
  return (
    <>
   <div>
      <Header></Header>
      <div className='absolute'>
      <img className='' src='https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg'></img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className=' absolute my-32 mx-auto right-0 left-0  bg-gray-200 h-[400px] w-[500px] flex flex-col justify-center items-center '>
       {isSignform? <p>Sign in</p>: <p>Sign up</p>}
       { !isSignform &&
              <div className=' m-2  '>
            <label >Name</label>
            <input ref={name} className='border rounded-lg' type='text'></input>
            
          </div>
          }
        <div className='m-2 mb-4  '>
        <label>EMail</label>
        <input ref={email} className='border rounded-lg p-2' type='text'></input>

          </div>
          
          <div className=' m-2  '>
            <label >Password</label>
            <input ref={password} className='border rounded-lg p-2' type='text'></input>
            
          </div>
          {error && <p className='text-red-600 font-medium '>{error}</p>}
        <button onClick={handleButtonClick} className='w-2/4 mt-2 border rounded-lg px-2'>SUbmit</button>
       { isSignform? <p className='mt-2' onClick={()=>setSignform(prev=>!prev)}>New to Netflix signUp Now..</p>:<p className='mt-2' onClick={()=>setSignform(prev=>!prev)}>Already User SignIn..</p>}
      </form>
    </div>

   
    </>
  )
}

export default Login