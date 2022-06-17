import { useRouter } from 'next/router'
import {getEventById} from '../../dummy-data'
import EventSummary from '../../components/events/event-detail/event-summary';
import EventLogistics from '../../components/events/event-detail/event-logistics';
import EventContent from '../../components/events/event-detail/event-content';


const EventDetail = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if(event === undefined || event === null) {
    return (
      <p>No Event Found</p>
    )
  } 
  console.log(event)
  return (
    <>
    <EventSummary title={event.title} />
    <EventLogistics 
    date = {event.date}
    address={event.location}
    image={event.image}
    imageAlt={event.title}
    />
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
    </>
  )
}
export default EventDetail