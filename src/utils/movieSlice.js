import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:null,

}
const moviesSlice=createSlice({
    name: 'movie',
    initialState,
    reducers:{
        AddMovies: (state,action)=>{
            state.movies=action.payload;
        }
    }
})
export default moviesSlice.reducer;
export const {AddMovies}=moviesSlice.actions;
