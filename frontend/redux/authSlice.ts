import { apiSlice } from "./apiSlice";
import { SIGN_IN, SIGN_UP } from "./constants";

type SinginType={
    email:string,
    password:string

}
type SingUpType={
    name:string,
    email:string,
    password:string

}

const authSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
      SignInMe:builder.mutation({
        query:(payload:SinginType)=>({
            url:`${SIGN_IN}`,
            method: 'POST',
            body: payload
        })
      }),
      SignUp:builder.mutation(({
        query:(payload:SingUpType)=>({
            url:`${SIGN_UP}`,
            method: 'POST',
            body: payload
        })
      }))


    })
})

export const {useSignInMeMutation,useSignUpMutation}=authSlice;
