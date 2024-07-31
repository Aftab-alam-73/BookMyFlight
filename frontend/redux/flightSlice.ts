import { apiSlice } from "./apiSlice";
import { ADD_FLIGHTS, GET_ALL_FLIGHTS, UPDATE_STATUS } from "./constants";

export type updateStatus={
  id: string
  payload:{
    status: string
    departure_gate:string
    scheduled_departure?:Date
  }
}
export type flightSearchType={
  id?:string
  from?:string
  to?:string
  date?:Date
  flightNumber?:string
}
export const flightSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllFlights: builder.query({
      query: (search?: flightSearchType) => {
        const params = new URLSearchParams();

        if (search?.from) params.append('from', search.from);
        if (search?.to) params.append('to', search.to);
        if (search?.id) params.append('id', search.id);
        if (search?.flightNumber) params.append('flightNumber', search.flightNumber);
       
        console.log(params.toString())
        return {
          url: `${GET_ALL_FLIGHTS}?${params.toString()}`
        }
      },
      providesTags: ["flights"],
    }),

    addFlight: builder.mutation({
      query: (payload: any) => ({
        url: `${ADD_FLIGHTS}`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["flights"],
    }),
    updateFlightStatus: builder.mutation({
      query: ({id,payload}:updateStatus) => ({
        url: `${UPDATE_STATUS}/${id}`,
        method:'PUT',
        body: payload,
      }),
      invalidatesTags: ["flights"],
    }),
  }),
});

export const { useGetAllFlightsQuery, useAddFlightMutation ,useUpdateFlightStatusMutation} = flightSlice;
