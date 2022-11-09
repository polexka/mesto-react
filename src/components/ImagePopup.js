function ImagePopup({card, onClose}) {
  return (
    <div className={card ? `popup popup_image popup_opened` : `popup popup_image`}>
      <div className="image-view">
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={onClose}></button>
        <img className="image-view__pic" src={card && card.link} alt={`Просмотр фото: ${card && card.name}`}/>
        <h2 className="image-view__title">
          {card && card.name}
        </h2>
      </div>
    </div>
  )
}

export default ImagePopup;