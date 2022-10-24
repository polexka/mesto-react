import React, { useState, useEffect } from 'react';
import { api } from '../utils/Api'
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
  })

  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards([...res]);
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrap">
          <div className="profile__image-wrap" onClick={props.onEditAvatar}>
            <div className="profile__image-view"></div>
            <img className="profile__image" src={userAvatar} alt="Изображение профиля" />
          </div>
          <div className="profile__info">
            <div className="profile__info-wrap">
              <h1 className="profile__name">
                {userName}
              </h1>
              <button className="profile__edit" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__caption">
              {userDescription}
            </p>
          </div>
        </div>
        <button className="profile__add" type="button" aria-label="Добавить фотографии" onClick={props.onAddPlace}></button>
      </section>
      <section className="gallery">
        <ul className="cards">
          {cards.map((card) => (
            <Card card={card} onCardClick={props.onCardClick} key={card._id} />
          ))}
        </ul>
      </section>

    </main>
  )
}

export default Main;