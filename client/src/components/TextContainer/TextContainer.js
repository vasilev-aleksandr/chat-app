import React from 'react';

import onlineIcon from '../../images/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="text__container">
    {
      users
        ? (
          <div>
            <h1 className = "text__container-title">Сейчас онлайн:</h1>
            <div className="text__container-user-list">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="text__container-item">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;