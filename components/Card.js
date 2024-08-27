export default class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._cardImageElement = this._cardElement.querySelector(".card__image");

    this._likeButton.addEventListener("click", () => {
      this._likeButton.classList.toggle("card__like-button_active");
    });

    this._deleteButton.addEventListener("click", () => {
      this._cardElement.remove();
    });

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick({ name: this._name, link: this._link });
      });
  }

  getCard() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._cardElement.querySelector(".card__title").textContent = this._name;
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._setEventListeners();

    return this._cardElement;
  }
}
