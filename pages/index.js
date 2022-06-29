import EventList from '../components/events/event-list.js';
import {getFeaturedEvents} from '../helpers/api-utils';
import Head from 'next/head';
import NewsletterRegistration from "../components/input/newsletter-registration"
function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Next JS Events</title>
        <meta name="description" content="Find a lot of events that allow you to evolve..."/>
      </Head>
      <NewsletterRegistration />
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