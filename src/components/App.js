import React, { useState, useEffect } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [currentUser, setUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUser(res);
      })
  }, [])

  const [isEditProfilePopupOpen, setEditProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setEditProfilePopup(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopup(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopup(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(data) {
    api.updateUserInfo(data)
      .then((res) => {
        setUser(res);
      })
    closeAllPopups();
  }

  function handleUpdateAvatar(avatar) {
    api.updateAvatar(avatar)
      .then((res) => {
        setUser(res);
      })
    closeAllPopups();
  }

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards([...res]);
      })
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        // получаем ответ с массивом карточек, каждую из карточек проверяем на соответствие айди, если верно то перерисовываем карту
        setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => (item._id !== card._id) ? item : null))
      })
  }

  function handleAddPlaceSubmit(data) {
    api.uploadCard(data)
      .then((res) => {
        setCards([res, ...cards]);
      })
    closeAllPopups();
  }

  function closeAllPopups() {
    setEditProfilePopup(false);
    setAddPlacePopup(false);
    setEditAvatarPopup(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards} />
        <Footer />

        {/* ВИДЫ ПОПАПОВ (props.name) : profile \\ add \\ avatar \\ delete*/}

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <PopupWithForm name="delete" title="Вы уверены?" button="Да" onClose={closeAllPopups}></PopupWithForm>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
