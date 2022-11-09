import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const place = useRef();
  const url = useRef();

  function handleClose() {
    props.onClose();
    place.current.value = '';
    url.current.value = '';
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: place.current.value,
      link: url.current.value
    });

    place.current.value = '';
    url.current.value = '';
  }

  return (
    <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={props.isOpen} onClose={handleClose} onSubmit={handleSubmit} >
      <label className="form__field">
        <input type="text" name="name" ref={place} id="card-title-input" placeholder="Название" className="form__input" required minLength="2" maxLength="30" />
        <span className="card-title-input-error form__input-error"></span>
      </label>
      <label className="form__field">
        <input type="url" name="link" ref={url} id="card-link-input" placeholder="Ссылка на картинку" className="form__input" required />
        <span className="card-link-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;