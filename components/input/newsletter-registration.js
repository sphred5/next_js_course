import classes from './newsletter-registration.module.css';
import {useRef} from 'react';

function NewsletterRegistration() {
  const emailInputRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();
    fetch('/api/newsletter', {
      method: 'POST',
      body : JSON.stringify({email : emailInputRef.current.value})
    })
    .then(response => response.json())
    .then(data => console.log(JSON.parse(data)))
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
