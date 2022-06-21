import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';
function Events() {
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`; 
    router.push(fullPath);
  } 
  
  
  return (
    <>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events}/>
    </>
  )
}

export default Events;

export async function getStaticProps(context) {
  
  const response = await fetch(`${process.env.REACT_APP_DUMMY_API_ENDPOINT}/events.json`)
  const data = await response.json();
  const formattedEvents = [];
  
  for (let event in data) {

   formattedEvents.push({id: event, ...data[event]})
   
  }

  return {
    props: {
      events: formattedEvents
    }
  }

}
