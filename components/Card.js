export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._handeImageClick = handleImageClick;
  }

  _setEventListeners() {
    const likeButton = this._cardSelector.querySelector(".card__like-button");
    const deleteButton = this._cardSelector.querySelector(
      ".card__delete-button"
    );

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like-button_active");
    });

    deleteButton.addEventListener("click", () => {
        this._cardElement.remove();
    }

    this._cardImageElement.addEventListener("click", () => {
      this._handleImageClick(this);
    });
  }

  getCard() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._setEventListeners();
  }
}
