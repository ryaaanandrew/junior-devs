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
        sender: "Meryl Silverburg",
        subject: subject,
        content: message,
      }
    });
  }

  return(
    <Container>
      <Form>
        <Header>Send a message</Header>
        <form onSubmit={e => handleSubmit(e)}>
          <Label>Recipient</Label>
          <Input type="text" onChange={e => setRecipient(e.target.value)} />
          <Label>Subject</Label>
          <Input type="text" onChange={e => setSubject(e.target.value)} />
          <Label>Message</Label>
          <TextArea type="text" onChange={e => setMessage(e.target.value)}/>

          <Button type="submit">send</Button>
        </form>
      </Form>
    </Container>
  );
}

export default SendMessage;

const Container = styled.div`
  padding-top: 10rem;
  border: 1px solid red;
  height: 95vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Form = styled.div`
  padding: 2rem 3rem;
  border: 1px solid black;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`

const Label = styled.h2`
  font-size: 2rem;
  margin: 1rem 0 1rem 0;
`

const Input = styled.input`
  width: 80%;
  height: 2.7rem;
  border: 1px solid black;
`

const TextArea = styled.textarea`
  width: 50rem;
  height: 25rem;
`

const Button = styled.div`
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  border: 1px solid black;
  width: 60%;
  margin: 2rem auto 0;
`