import classes from './contact-form.module.css';
import { useState } from 'react';

function ContactForm() {
  const [enterEmail, setEnterEmail] = useState('');
  const [enterName, setEnterName] = useState('');
  const [enterMessage, setenterMessage] = useState('');
  function sendMessageHandler(event) {
    event.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: enterEmail,
        name: enterName,
        message: enterMessage,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  return (
    <section className={classes.contact}>
      <h1>How can i help, mate</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email' id='email'>
              <input
                type='email'
                id='email'
                required
                value={enterEmail}
                onChange={(event) => setEnterEmail(event.target.value)}
              />
            </label>
          </div>
          <div className={classes.control}>
            <label htmlFor='name' id='name'>
              <input
                type='name'
                id='name'
                required
                value={enterName}
                onChange={(event) => setEnterName(event.target.value)}
              />
            </label>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>
            your message
            <textarea
              id='message'
              row='10'
              value={enterMessage}
              onChange={(event) => setenterMessage(event.target.value)}
            ></textarea>
          </label>
        </div>
        <div className={classes.action}>
          <button onSubmit={sendMessageHandler}>send message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
