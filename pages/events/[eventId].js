import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import Head from 'next/head';
import {getFeaturedEvents, getEventById } from '../../helpers/api-utils';

const EventDetail = (props) => {
  const event = props.event;
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    )
  }
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
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
    },
    revalidate : 30
  }
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map(event => ({params: {eventId : event.id}}))
  
  return {
    paths: paths, 
    fallback: true 
  }
}


