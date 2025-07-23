import OpenAI from "openai";

import React, { useRef, useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { options } from "../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { AddSearchMovies } from "../utils/SearchSlice";

function GptSearchBar() {
  const searchText = useRef();
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  // const[gptsearch,setgptsearch]=useState([]);
const api=import.meta.env.VITE_GEN_AI_KEY;
console.log(api);

  const ai = new GoogleGenAI({
    apiKey: api,
  });
console.log(import.meta.env.VITE_SOME_KEY) // "123"

  // The client gets the API key from the environment variable `GEMINI_API_KEY`.
  // const ai = new GoogleGenAI({API_KEY:'AIzaSyB5qT95cFGg-skjCP2mCiAfBtzkWjnpJt0'});

  // const apiKey='AIzaSyB5qT95cFGg-skjCP2mCiAfBtzkWjnpJt0';

  // AIzaSyB5qT95cFGg-skjCP2mCiAfBtzkWjnpJt0

 

// async function searchFilm(arr) {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(arr)}&include_adult=false&language=en-US&page=1`,
//       options
//     );
//     const data = await response.json();
//     dispatch(AddSearchMovies(data.results));
//     return data.results;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// }
async function searchFilm(arr){
   return await fetch(`https://api.themoviedb.org/3/search/movie?query=${arr}&include_adult=false&language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => res.results)
  .then(res=> {console.log(res);
   
    return res;
    
  })
  .catch(err => console.error(err));

  
}


  async function handleGptSearchClick() {
   
    async function main1() {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents:
          searchText.current.value +
          " only give me names of top 5 movies,comma seperated like example result given ahead. Example result: Gadar, Wanted, Koi Mil Gaya, Krish, Ready",
      });
      console.log(response.text);
       const gptsearch = response.text.split(",");
  
       const promiseArray= gptsearch.map((arr)=> searchFilm(arr));
       const results=await Promise.all(promiseArray);
      console.log(results,'results');
      dispatch(AddSearchMovies({movieNames: gptsearch, movieResults: results}));
     
      

     

    }
   
    main1();

     
  }

  

  console.log(data, "data");

  const search = useSelector((state) => state.searchMovies);

  console.log(search, "search");

  return (
    <div className="pt-[200px] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="my-5 p-4 m-4 border bg-white col-span-7"
          type="text"
        ></input>
        <button
          className="my-5 col-span-3 border-black border-rounded text-white bg-red-600"
          onClick={handleGptSearchClick}
        >
          Add
        </button>
      </form>
      <div className="flex flex-row"></div>
    </div>
  );
}

export default GptSearchBar;
