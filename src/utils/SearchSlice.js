import { createSlice } from "@reduxjs/toolkit";

const SearchSlice=createSlice({
    name:'searchMovies',
    initialState:{
       movieNames:null,
       movieResults: null
    },
    reducers:{
        AddSearchMovies:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    }
})
export const {AddSearchMovies}=SearchSlice.actions;
export default SearchSlice.reducer;