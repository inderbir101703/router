import { json, redirect } from "react-router-dom"
import EventForm from "../components/EventForm"
const NewEventPage=()=>{
 console.log('adding a event')
    return <EventForm  method='POST'/>
}
export default NewEventPage



export async function action({request,params}){
    console.log('in action')
    const fData=await  request.formData()
console.log('in action')
let result;
for(let [key,value] of fData ){
result={...result,[key]:value}
}


const response = await fetch('http://localhost:8080/events',{
method:'POST',
body:JSON.stringify(result),
headers:{
    'Content-Type': 'application/json'
}

})
if(!response.ok){
  throw  json({message:'not able to post'},{status:500})

}
return redirect('/')


}