import { apiSlice } from "./apiSlice";
import { GET_ALL_FLIGHTS } from "./constants";


export const flightSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({

     getAllFlights:builder.query(({
        query:(search?:string)=>({
            url:`${GET_ALL_FLIGHTS}`
        }),
        providesTags:["flights"]
     })),

    //  addCampaign:builder.mutation({
    //     query:(payload:CampaignData)=>({
    //         url:`${CAMPAIGN_URL}`,
    //         method: "POST",
    //         body: payload
    //     }),
    //     invalidatesTags:["campaigns"]
    //  }),
    //  deleteCampaign:builder.mutation({
    //     query:(id:string)=>({
    //         url:`${CAMPAIGN_URL}/${id}`,
    //         method:"DELETE",
    //     }),
    //     invalidatesTags:["campaigns"]
    //  })


    })
})

export const {useGetAllFlightsQuery}=flightSlice;

