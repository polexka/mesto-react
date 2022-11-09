import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const [place, setPlace] = useState('');
  const [url, setUrl] = useState('');

  React.useEffect(() => {
    setPlace('');
    setUrl('');
  }, [props.isOpen]);

  function handleClose() {
    props.onClose();
  }

  function handlePlaceChange(e) {
    setPlace(e.target.value);
  }
  
  function handleUrlChange(e) {
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: place,
      link: url
    })
  }

  return (
    <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={props.isOpen} onClose={handleClose} onSubmit={handleSubmit} >
      <label className="form__field">
        <input type="text" name="name" id="card-title-input" placeholder="Название" className="form__input" value={place} onChange={handlePlaceChange} required minLength="2" maxLength="30" />
        <span className="card-title-input-error form__input-error"></span>
      </label>
      <label className="form__field">
        <input type="url" name="link" id="card-link-input" placeholder="Ссылка на картинку" className="form__input" value={url} onChange={handleUrlChange} required />
        <span className="card-link-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;