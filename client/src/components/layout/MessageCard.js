import React from 'react';

const MessageCard = ({ message }) => {
  return(
    <li className='messageCard'>
      <div className="messageCard__from"><span className='messageCard__sender'>{ message.sender }</span></div>
      <div className="messageCard__content"> { message.content }</div>
    </li>
  )
};

export default MessageCard;
