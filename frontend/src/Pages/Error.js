import { useRouteError } from "react-router-dom";

const { default: PageContent } = require("../components/Pagecontent");

function ErrorPage(){
    const error=useRouteError()
  console.log('inside error',error)
    let title='not able to found'
    let message='something went wrong'
    if(error.status===500)
    message=error.data.message
if(error.status===404)
{
    title='not found'
    message='could not able to find'
}

if(error.message)
message=error.message
    return <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
}

export default ErrorPage