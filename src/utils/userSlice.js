import { createSlice } from "@reduxjs/toolkit"

const initialState={
    
}
 const userSlice=createSlice({
    name: 'user',
    initialState,
    reducers:{
        AddUser:(state,action)=>{
            // state.users.push(action.payload);
            return action.payload;
        },
        RemoveUser:()=>{
            return null;
        }
    }
})
export const {AddUser,RemoveUser}=userSlice.actions;
export default userSlice.reducer;
