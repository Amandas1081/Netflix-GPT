// import React, { useEffect, useRef, useState } from 'react'
// import Header from './Header'
// import { validate } from '../utils/validate';
// import { auth } from '../utils/firebase';
// import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';


// function Login() {
//   const [isSignform,setSignform]=useState(true);

//   const [error,setError]=useState(null);
//   const email=useRef();
//   const password=useRef();
//   const name=useRef();
//   const navigate =useNavigate();
//   const user=useSelector(state =>state.user);
//   useEffect(()=>{
//     if(user !==null){
//       navigate('/browse')
//     }
//   },[])



//   function handleButtonClick(){

//     let email1=email.current.value;
//     let password1=password.current.value

//     const ans=validate(email.current.value,password.current.value)
//     // console.log(email,password);
//     // console.log(ans);
//     setError(ans);
//     if(!isSignform){

//       createUserWithEmailAndPassword(auth, email1, password1)
//       .then((userCredential) => {
//         // Signed up 
//         const user=userCredential.user;
//         updateProfile(user, {
//           displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
//         }).then(() => {
//           // Profile updated!
         
//           // ...
//         }).catch((error) => {
//           // An error occurred
//           // ...
//           setError(error.message);
//         });
//         // const user = userCredential.user;
//         console.log(user);
       
        
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         setError(errorCode+errorMessage)
//         // ..
//       });
//       }else{
//         signInWithEmailAndPassword(auth, email1, password1)
//         .then((userCredential) => {
//           // Signed in 
//           const user = userCredential.user;
//           console.log(user);
        
          
//           // ...
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setError(errorCode+errorMessage)
//         });
//       }
    

//   }
//   return (
//     <>
//    <div>
//       <Header></Header>
//       <div className='absolute'>
//       <img className='h-screen' src='https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg'></img>
//       </div>
//       <form onSubmit={(e)=>e.preventDefault()} className='rounded-2xl absolute my-38 mx-auto right-0 left-0 text-white bg-black h-[400px] w-[500px] flex flex-col justify-center items-center '>
//        {isSignform? <p>Sign in</p>: <p>Sign up</p>}
//        { !isSignform &&
//               <div className=' m-2  '>
//             <label >Name</label>
//             <input ref={name} className='border rounded-lg ml-4' type='text'></input>
            
//           </div>
//           }
//         <div className='m-2 mb-4  '>
//         <label>Email</label>
//         <input ref={email} className='border rounded-lg p-2 ml-4' type='text'></input>

//           </div>
          
//           <div className=' m-2  '>
//             <label >Password</label>
//             <input ref={password} className='border rounded-lg p-2 ml-4' type='password'></input>
            
//           </div>
//           {error && <p className='text-red-600 font-medium '>{error}</p>}
//         <button onClick={handleButtonClick} className='w-2/4 mt-2 border rounded-lg px-2'>SUbmit</button>
//        { isSignform? <p className='mt-2' onClick={()=>setSignform(prev=>!prev)}>New to Netflix signUp Now..</p>:<p className='mt-2' onClick={()=>setSignform(prev=>!prev)}>Already User SignIn..</p>}
//       </form>
//     </div>

   
//     </>
//   )
// }

// export default Login



import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import { validate } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Login() {
  const [isSignform, setSignform] = useState(true);
  const [error, setError] = useState(null);

  const email = useRef();
  const password = useRef();
  const name = useRef();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user !== null) {
      navigate('/browse');
    }
  }, [user, navigate]);

  function handleButtonClick() {
    const email1 = email.current.value;
    const password1 = password.current.value;
    const ans = validate(email1, password1);
    setError(ans);

    if (ans) return;

    if (!isSignform) {
      // Sign up
      createUserWithEmailAndPassword(auth, email1, password1)
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: name.current.value,
            photoURL: 'https://example.com/jane-q-user/profile.jpg',
          });
        })
        .catch((error) => setError(error.message));
    } else {
      // Sign in
      signInWithEmailAndPassword(auth, email1, password1)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => setError(error.code + ' ' + error.message));
    }
  }

  return (
    <>
      <Header />
      <div className="absolute inset-0 -z-10">
        <img
          className="h-screen w-full object-cover"
          src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
          alt="Background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute inset-x-0 mx-auto top-1/4 rounded-2xl bg-black bg-opacity-80 text-white h-[420px] w-[400px] flex flex-col justify-center items-center px-6"
      >
        <h2 className="text-2xl font-bold mb-4">{isSignform ? 'Sign In' : 'Sign Up'}</h2>

        {!isSignform && (
          <div className="w-full mb-3">
            <label className="block mb-1">Name</label>
            <input
              ref={name}
              type="text"
              className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none"
            />
          </div>
        )}

        <div className="w-full mb-3">
          <label className="block mb-1">Email</label>
          <input
            ref={email}
            type="text"
            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none"
          />
        </div>

        <div className="w-full mb-3">
          <label className="block mb-1">Password</label>
          <input
            ref={password}
            type="password"
            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none"
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        <button
          onClick={handleButtonClick}
          className="w-full mt-4 py-2 bg-red-600 hover:bg-red-700 transition rounded-lg font-semibold"
        >
          Submit
        </button>

        <p
          className="mt-4 text-sm hover:underline cursor-pointer"
          onClick={() => setSignform((prev) => !prev)}
        >
          {isSignform ? 'New to Netflix? Sign up now.' : 'Already have an account? Sign in.'}
        </p>
      </form>
    </>
  );
}

export default Login;
