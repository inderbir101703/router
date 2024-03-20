import { useEffect, useState } from "react"
import EventsList from "../components/EventsList"
const EventsPage=()=>{
   const [items,setItems]=useState([]) 
 const [error,setError]=useState(null)
   useEffect(()=>{


    async function  getData(){

        try{
  const response= await fetch('http://localhost:8080/events')
  if(!response.ok)
  {throw new Error('unable to get the required data')}
  const data=await response.json()
setItems(data.events)
console.log(data)
        }
        catch(error){
        setError({message:error.message||'failed to get data'})
        }
}

   },[]) 
    return <EventsList events={items}/>
}
export default EventsPage