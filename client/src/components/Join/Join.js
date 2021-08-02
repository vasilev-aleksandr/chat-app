import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import "./Join.css";

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className = "app__container">
      <form className="login__form">
        <h1 className="login__title">Добро пожаловать!</h1>
        <input className="login__input" type ="text" placeholder="Имя" onChange = {(event) =>{setName(event.target.value)}}></input>
        <input className="login__input" type ="text" placeholder="Комната" onChange = {(event) =>{setRoom(event.target.value)}}></input>
        <Link onClick ={event => (!name || !room) ? event.preventDefault() : null}to={`/chat?name=${name}&room=${room}`}>
          <button className="login__submit" type="submit">Войти в чат</button>
        </Link>
      </form>
    </div>
  )
}

export default Join;