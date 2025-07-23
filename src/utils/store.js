import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice';
import movieSlice from "./movieSlice";
import gptSlice from './GptSlice';
import SearchSlice from './SearchSlice';

 const store=configureStore({
    reducer:{
        user: userSlice,
        movie: movieSlice,
        search: gptSlice,
        searchMovies: SearchSlice
    }
})
export default store;