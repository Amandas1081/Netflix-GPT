// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS_6geBV_vvgHaLuooGN1hwwS6HQw8DlU",
  authDomain: "netflix-gpt-53d77.firebaseapp.com",
  projectId: "netflix-gpt-53d77",
  storageBucket: "netflix-gpt-53d77.firebasestorage.app",
  messagingSenderId: "11622842554",
  appId: "1:11622842554:web:64ffca633cecfe9fe44283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();


 export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmRhMzNmNzFhOTljMjgyZjE1Yzg5MjkyNTAzODA5MyIsIm5iZiI6MTc1MjUyMzIzNC44NzUsInN1YiI6IjY4NzU2MWUyMjZlM2ZmZGU2NzhlODMyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o13exaWY6tcVxad81ffRvC7sRdhinNObLUt2fmsqT54'
  }
};


