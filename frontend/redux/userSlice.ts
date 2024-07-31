import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
   name:"user",
   initialState:{
     id:"",
     name:"",
     profile:"",
     role:"",
     accessToken:"",
   },
   reducers:{
     addUser:(state,actions)=>{
         state.id=actions.payload.user._id;
         state.name=actions.payload.user.name;
         state.profile=actions.payload.user.profile;
         state.role=actions.payload.user.role;
         state.accessToken=actions.payload.accessToken;
     }
   }
})

export const {addUser}=userSlice.actions;
export default userSlice.reducer;