import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_MESSAGES } from '../../queries/queries';
import MessageCard from '../layout/MessageCard';

const Messages = () => {
  const [messages, setMessages] = useState({});
  const { loading, data, error } = useQuery(GET_MESSAGES);

  const renderMessages = () => {
    if(loading || error) return <li>Loading...</li>
      
    return data.getMessages.map(message => {
      return <MessageCard message={message} />
    });
  };

  return(
    <div className="container">
      <div className="messages">
          <h1>Messages</h1>
          <ul>
            { renderMessages() }
          </ul>
      </div>
    </div>
  )
};

export default Messages;
