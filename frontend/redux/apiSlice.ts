import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const apiSlice=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:process.env.NEXT_PUBLIC_BASE_URL,
        prepareHeaders:async (headers, { getState }) => {
            const res = localStorage.getItem('persist:root');
            if (res) {
               const data=await JSON.parse(res);
               const token=await JSON.parse(data.user);
              headers.set('authorization', `Bearer ${token.accessToken!}`);
            }
            return headers;
          },
    }),
    endpoints:()=>({}),

    tagTypes:["flights"]


})