import { useGetAllFlightsQuery } from '@/redux/flightSlice'
import React from 'react'
import FlightCard from './FlightCard';

const ShowAllFlights = () => {
    const {data,isSuccess,isError,isFetching}=useGetAllFlightsQuery({});
    if(isFetching)return <h1>Fetching  all flights.....</h1>
    if(isError) return <h1>Opps! Something went wrong.</h1>
    if(isSuccess)console.log("flights",data)
  return (
    <div>
      {
        isSuccess && data.response.map((flight:any)=>{
            return <FlightCard key={flight.flight_number} flight={flight}/>
        })
      }
    </div>
  )
}

export default ShowAllFlights
