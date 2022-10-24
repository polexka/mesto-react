import React from 'react';
import Api from '../utils/Api'
import { baseUrl, token } from '../utils/constants';
import Card from './Card';

function Main(props) {
  const api = new Api({
    baseUrl: baseUrl,
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
  });

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
  })

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards([...res]);
      })
  })

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
            <Card card={card} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>

    </main>
  )
}

export default Main;