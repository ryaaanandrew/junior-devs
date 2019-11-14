import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import { SEND_MESSAGE } from '../../queries/queries';

const SendMessage = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sendMessage] = useMutation(SEND_MESSAGE);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(recipient, subject, message);
    sendMessage({
      variables: {
        recipient: recipient,
        sender: 'Meryl Silverburg',
        subject: subject,
        message: message,
      }
    });
  }

  return(
    <Container>
      <h1>Send a message</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <h2>Recipient</h2>
        <input type="text" onChange={e => setRecipient(e.target.value)} />
        <h2>Subject</h2>
        <input type="text" onChange={e => setSubject(e.target.value)} />
        <h2>Message</h2>
        <input type="text" onChange={e => setMessage(e.target.value)}/>
        <button type="submit">send</button>
      </form>
    </Container>
  );
}

export default SendMessage;

const Container = styled.div`
  padding-top: 10rem;
  border: 1px solid red;
  height: 95vh;
`
