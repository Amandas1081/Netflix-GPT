import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import {signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { AddUser, RemoveUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
// import { use } from 'react';
function Header() {
//  const dispatch =useDispatch();
 const user=useSelector(store=>store.user);
 const navigate = useNavigate();

     const dispatch=useDispatch();

 
    // const user=useSelector(state=> state.user);
    useEffect(()=>{
    const unsuscribe= onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,password,displayName} = user;

    dispatch(AddUser({uid:uid,email:email,password:password,displayName:displayName}))
    console.log(uid);
    navigate('/browse');
    
    
    // ...
  } else {
    // User is signed out
    // ...
    console.log('signed out');
    dispatch(RemoveUser());
    navigate('/')
    
  }
});
  return ()=>unsuscribe();
        
    },[])




  function handleClick(){
   
      signOut(auth).then(() => {
        dispatch(RemoveUser());
        navigate('/')
  // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.log(error);
        
      });
  }


  return (
    <div className='absolute px-2 py-2 z-1 w-screen bg-gradient-to-b from-black flex'>
      <img className='w-[100px] pl-4' src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'></img>
      { user  &&  <div className=' '> 
         <img className='absolute mt-2 right-25' src='https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbFi7a9F6B6qNav_xqpi61KNX66r6tRfJaoBrI0R7a8of17S5oV7YDhLdn-YllODZmUUV78MeZpzY1Vc7wGjSjg0QmTb86E.png?r=7e4'></img>
       <button onClick={handleClick} className='mt-3 mx-2 absolute right-5'>Sign out</button>
      </div> 
      }
     
    </div>
  )
}

export default Header