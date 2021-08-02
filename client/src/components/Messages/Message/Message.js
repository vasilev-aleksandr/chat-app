import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="message__container justifyEnd">
          <p className="message__sent-text pr-10">{trimmedName}</p>
          <div className="message__box backgroundBlue">
            <p className="message__text colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="message__container justifyStart">
            <div className="message__box backgroundLight">
              <p className="message__text colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="message__sent-text pl-10 ">{user}</p>
          </div>
        )
  );
}

export default Message;