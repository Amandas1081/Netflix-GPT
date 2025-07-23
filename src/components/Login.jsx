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
