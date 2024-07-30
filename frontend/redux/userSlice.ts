import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
   name:"user",
   initialState:{
     id:"",
     name:"",
     profile:"",
   },
   reducers:{
     addUser:(state,payload:any)=>{
         state.id=payload.id;
         state.name=payload.name;
         state.profile=payload.profile;
     }
   }
})

export const {addUser}=userSlice.actions;
export default userSlice.reducer;