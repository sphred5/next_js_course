import React from 'react'
import Link from 'next/link'
import classes from './event-item.module.css';
import button from '../ui/button'
import Button from '../ui/button';

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div>
          <time className={classes.date}>
            {humanReadableDate}
          </time>
          <div className={classes.address}>
            <address>
              {formattedAddress}
            </address>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              Explore Event
            </Button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default EventItem