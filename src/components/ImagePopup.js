function ImagePopup(props) {
  function doNothing() {}

  props.card ? console.log(props.card) : doNothing() ;

  return (
    <div className={props.card ? `popup popup_image popup_opened` : `popup popup_image`}>
      <div className="image-view">
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
        <img className="image-view__pic" src={props.card ? props.card.link : ''} alt="Просмотр фото"/>
        <h2 className="image-view__title">
          {props.card ? props.card.name : ''}
        </h2>
      </div>
    </div>
  )
}

export default ImagePopup;