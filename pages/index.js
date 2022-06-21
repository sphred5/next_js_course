import EventList from '../components/events/event-list.js';
function HomePage(props) {
  return (
    <div>
      <EventList items={props.featuredEvents}/>
    </div>
  )
}
export default HomePage

export async function getStaticProps(){

  const response = await fetch(`${process.env.REACT_APP_DUMMY_API_ENDPOINT}/events.json`);
  const data = await response.json();
  const events = [];

  for (let event in data){
    events.push({id : event, ...data[event]})
  }
  const featuredEvents = events.filter(event => event.isFeatured);
  return {
    props:{
      featuredEvents :featuredEvents 
    }
  }
}