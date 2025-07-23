import { createSlice } from "@reduxjs/toolkit";

export const gptSlice=createSlice({
    name:'search',
    initialState:{
        showGpt:false
    },
    reducers:{
        AddGpt:(state,action)=>{
            state.showGpt=!state.showGpt
        }
    }
})
export const {AddGpt}=gptSlice.actions;
export default gptSlice.reducer;