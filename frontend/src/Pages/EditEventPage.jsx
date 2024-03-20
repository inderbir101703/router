import { useRouteError, useRouteLoaderData } from "react-router-dom"
import EventForm from "../components/EventForm"

const EditEventPage=()=>{
    const event=useRouteLoaderData('event-detail')

    return <EventForm event={event.event}/>
}
export default EditEventPage