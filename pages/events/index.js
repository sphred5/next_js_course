import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function Events() {
  const events = getAllEvents();
  return (
    <>
      <EventsSearch/>
      <EventList items={events}/>
    </>
  )
}
export default Events