import { NavLink } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/events' className={({isActive})=>isActive?classes.active:null}>Events</NavLink>
     
          </li>
          <li>
          <NavLink to='/events/new' className={({isActive})=>isActive?classes.active:null}>new event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
