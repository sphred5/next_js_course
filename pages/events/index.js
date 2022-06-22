import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/dist/client/router';
import { getAllEvents } from '../../helpers/api-utils';
import Head from 'next/head';

function Events(props) {
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }


  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of events that allow you to evolve..." />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </>
  )
}

export default Events;

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events
    },
    revalidate: 60
  }

}
