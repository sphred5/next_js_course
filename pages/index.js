import EventList from '../components/events/event-list.js';
import getFeaturedEvents from '../helpers/api-utils/getFeaturedEvents';

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events}/>
    </div>
  )
}

export async function getStaticProps(){
  
  const featuredEvents = await getFeaturedEvents()
 
  return {
    props:{
      evetns : featuredEvents 
    }
  }
}

export default HomePage