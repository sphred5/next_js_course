import {getFeaturedEvents} from '../dummy-data.js';
import EventList from '../components/events/event-list.js';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Featured Events</h1>
      <EventList items={featuredEvents}/>
    </div>
  )
}
export default HomePage