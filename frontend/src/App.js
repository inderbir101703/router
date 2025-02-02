import {createBrowserRouter, json, RouterProvider} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import EventsPage from './Pages/EventsPage';
import { action as addEventAction } from './Pages/NewEventPage';
import { actionDelete } from './Pages/EventDetailPage';
import EventDetailsPage from './Pages/EventDetailPage';
import NewEventPage from './Pages/NewEventPage';
import Layout from './Layout';
import EventsLayout from './EventLayout';
import EditEventPage from './Pages/EditEventPage';
import ErrorPage from './Pages/Error';
// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router=createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  errorElement:<ErrorPage/>,
  children:[
    {
     path:'/',
     element:<HomePage/> ,
     loader: async ()=>{
      const response=await  fetch('http://localhost:8080/events')
  if(!response.ok){
    // throw new Response(JSON.stringify({message:'data not found'}),{status:501})
    throw json({
      message:'data not found'   
    },
    {
      status:500
    }
    )
  }
else{

  return response
}
     }
    },




    {
    path:'events',
    element:<EventsLayout/>,
    children:[
      
      {
        path:':eventId',
        id:'event-detail',
        loader: async ({request,params})=>{
          const eventId=params.eventId
          const response=await fetch('http://localhost:8080/events/'+eventId)
    
          if(!response.ok)
          {
            throw json({message:'not found'},{status:500})
    
          }
          else{
            return response
          }
    
        },
       children:[{
        index:true,
        element:<EventDetailsPage/>,
        action:actionDelete
       },
       {
        path:'edit',
        element:<EditEventPage/>,

      }
      
      ] 
      },
      {
        
        path:'new',
        element:<NewEventPage/>,
        action:addEventAction
     }
      
      
     
    
  
  
  
  ]
  }
  
]

}])
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
