import { redirect, json, useLocation, useParams, useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem"
const EventDetailsPage=()=>{
    const data=useRouteLoaderData('event-detail')
    return <EventItem event={data.event}/>
}
export default EventDetailsPage


export async function actionDelete({request,params}){
  const eventId=params.eventId
  const response= await fetch('http://localhost:8080/events/'+eventId,{method:request.method})
  
  if(!response.ok){
    throw json({message:"element not deleted"},{status:500})
  }
  return redirect('/')
}