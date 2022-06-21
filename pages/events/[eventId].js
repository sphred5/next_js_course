import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import {getAllEvents, getEventById } from '../../helpers/api-utils';

const EventDetail = (props) => {
  const event = props.event;
  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Found</p>
      </ErrorAlert>
    )
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
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
export default EventDetail;

export async function getStaticProps(context) {

  const {params} = context;
  const eventId = params.eventId;
  const event = await getEventById(eventId);

  return {
    props : {
      event: {id : eventId, ...event} 
    }
  }
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map(event => ({params: {eventId : event.id}}))
  
  return {
    paths: paths, 
    fallback: false
  }
}


