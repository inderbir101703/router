import { useEffect, useState } from "react"
import EventsList from "../components/EventsList"
import { useLoaderData } from "react-router-dom"
const HomePage=()=>{
  const data=useLoaderData()
  console.log(data,'asdsa')
  const items=data.events
//    const [items,setItems]=useState([]) 
//  const [error,setError]=useState(null)
//    useEffect(()=>{


//     async function  getData(){

//         try{
//   const response= await fetch('http://localhost:8080/events')
//   if(!response.ok)
//   {throw new Error('unable to get the required data')}
//   const data=await response.json()
// setItems(data.events)
// console.log(data)
//         }
//         catch(error){
//         setError({message:error.message||'failed to get data'})
//         }
// }
// getData()
//    },[]) 
    return <EventsList events={items}/>
}
export default HomePage