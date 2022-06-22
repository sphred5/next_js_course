import EventList from '../components/events/event-list.js';
import {getFeaturedEvents} from '../helpers/api-utils';
import Head from 'next/head';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Next JS Events</title>
        <meta name="description" content="Find a lof of events that allow you to evolve..."/>
      </Head>
      <EventList items={props.events}/>
    </div>
  )
}

export async function getStaticProps(){
  
  const featuredEvents = await getFeaturedEvents()
 
  return {
    props:{
      events : featuredEvents 
    }
  }
}

export default HomePage