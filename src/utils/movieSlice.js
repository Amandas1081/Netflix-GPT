import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:null,
    upcoming:null,
    topRated:null,
    popular:null,


}
const moviesSlice=createSlice({
    name: 'movie',
    initialState,
    reducers:{
        AddMovies: (state,action)=>{
            state.movies=action.payload;
        },
        Popular: (state,action)=>{
            state.popular=action.payload;
        },
        TopRated: (state,action)=>{
            state.topRated=action.payload;
        },
        UpComing: (state,action)=>{
            state.upcoming=action.payload;
        }
    }
})
export default moviesSlice.reducer;
export const {AddMovies,Popular,TopRated,UpComing}=moviesSlice.actions;
