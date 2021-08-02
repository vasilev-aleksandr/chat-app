import React from 'react';
import "./Info.css";
import closeIcon from '../../images/closeIcon.png';
import onlineIcon from '../../images/onlineIcon.png'


const Info =({ room }) => (
  <div className="info">
    <div className = "info__container_left">
      <img className = "info__icon_online" src = {onlineIcon} alt="пользователь онлайн"/>
      <h3>Комната:{room}</h3>
    </div>
    <div className = "info__container_right">
      <a href="/"><img src={closeIcon} alt = "закрыть чат"/></a>
    </div>
  </div>
);

export default Info;
