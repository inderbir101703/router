import { Form, Link, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {
  const submit=useSubmit()
  console.log(event,'heh')
  function startDeleteHandler() {
    const proceed=window.confirm('do you wanna proceed')
    if(proceed){
  submit(null,{method:'delete'})
    }
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        {/* <a href="edit">Edit</a> */}
        <Link to={`/events/${event.id}/edit`} state={event}>Edit</Link>

        <button onClick={startDeleteHandler}>Delete</button>

      </menu>
    </article>
  );
}

export default EventItem;
