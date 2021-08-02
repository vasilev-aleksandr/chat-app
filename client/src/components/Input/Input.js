import React from 'react';
import "./Input.css";


const Input =({ message, setMessage, sendMessage} ) => (
  <form className ="input__form">
    <input
      className = "input__input"
      type = "text"
      placeholder = "Введите сообщение"
      value = {message}
      onChange = {(event) => setMessage(event.target.value)}
      onKeyPress = {event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="input__submit" onClick={e => sendMessage(e)}>Отправить</button>
  </form>
  
);

export default Input;