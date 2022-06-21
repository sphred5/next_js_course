import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

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

export async function getServerSideProps(context) {
  const {params} = context;
  const eventId = params.eventId;

  const response = await fetch(`${process.env.REACT_APP_DUMMY_API_ENDPOINT}/events/${eventId}.json`);
  const data = await response.json();

  return {
    props : {
      event: {id : eventId, ...data} 
    }
  }
}


