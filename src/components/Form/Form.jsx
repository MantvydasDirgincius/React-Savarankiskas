import { useState } from 'react';
import Button from '../UI/Button';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [registration, setRegistration] = useState(null);

  function inputHandler(event, setState) {
    setState(event.target.value);
  }

  function inputClearHandler() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  async function formHandler(e) {
    e.preventDefault();

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: subject,
      message: message,
    };
    const resp = await fetch('https://reqres.in/api/users', {
      headers: { 'Content-Type': 'application.json' },
      method: 'POST',
      body: JSON.stringify(data),
    });
    const result = await resp.json();
    console.log(resp.ok);
    if (resp.ok) {
      setRegistration(result.createdAt);
    }

    inputClearHandler();
  }

  return registration === null ? (
    <form className='form' onSubmit={formHandler}>
      <div className='formGrid'>
        <div>
          <label htmlFor='name'>First Name</label>
          <input
            value={firstName}
            onChange={(event) => inputHandler(event, setFirstName)}
            type='text'
            name='name'
            id='name'
          />
        </div>
        <div>
          <label htmlFor='lastname'>Last Name</label>
          <input
            value={lastName}
            onChange={(event) => inputHandler(event, setLastName)}
            type='text'
            name='lastname'
            id='lastname'
          />{' '}
          <br />
        </div>
      </div>
      <label htmlFor='email'>Email</label>
      <input
        value={email}
        onChange={(event) => inputHandler(event, setEmail)}
        type='text'
        name='email'
        id='email'
      />{' '}
      <br />
      <label htmlFor='subject'>Subject</label>
      <input
        value={subject}
        onChange={(event) => inputHandler(event, setSubject)}
        type='text'
        name='subject'
        id='subject'
      />{' '}
      <br />
      <label htmlFor='message'>Message</label>
      <textarea
        value={message}
        onChange={(event) => inputHandler(event, setMessage)}
        name='message'
        id='message'
        cols='30'
        rows='10'
      ></textarea>{' '}
      <br />
      <Button text='Send Message' />
    </form>
  ) : (
    <div>
      <p>Gavome jusu uzklausa, netrukus susisieksime</p>
    </div>
  );
}
