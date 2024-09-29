import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import * as constants from "../utils/constants.js";

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalEsc);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalEsc);
}

function closeModalEsc(evt) {
  if (evt.key === "Escape") {
    const modalOpened = document.querySelector(".modal_opened");
    closeModal(modalOpened);
  }
}

constants.initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  constants.cardList.append(cardElement);
});

const imagePopup = new PopupWithImage({
  popupSelector: "#preview-modal",
});

imagePopup.setEventListeners();

function handleImageClick(data) {
  //openModal(previewModal);
  // previewImage.src = data.link;
  // previewImage.alt = data.name;
  // previewTitle.textContent = data.name;
  imagePopup.open(data);
}

function getCardElement(data) {
  const card = new Card(data, "#card-template", handleImageClick);
  return card.getCard();
}

previewModalCloseButton.addEventListener("click", () => {
  closeModal(previewModal);
});

cardAddButton.addEventListener("click", () => {
  openModal(cardAddModal);
});

cardModalButton.addEventListener("click", () => {
  closeModal(cardAddModal);
});

cardFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardImageInput.value;
  const cardData = { name, link };
  const cardElement = getCardElement(cardData);
  constants.cardList.prepend(cardElement);
  constants.cardFormElement.reset();
  cardFormValidator.toggleButtonState();
  closeModal(cardAddModal);
});

const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(
  validationSettings,
  profileFormElement
);
const cardFormValidator = new FormValidator(
  validationSettings,
  cardFormElement
);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

const cardCreator = new Section(
  {
    items: constants.initialCards,
    renderer: (item) => {
      const cardElement = getCardElement(item);
      cardCreator.addItem(cardElement);
    },
  },
  constants.cardList
);

cardCreator.renderItems();

const userProfileInfo = new UserInfo({
  profileName: ".profile__title",
  profileJob: ".profile__subtitle",
});

const profilePopup = new PopupWithForm({
  popupSelector: "#edit-modal",
  handleFormSubmit: (data) => {
    userProfileInfo.setUserInfo(data);
    profilePopup.close();
  },
});

profilePopup.setEventListeners();

const cardPopup = new PopupWithForm({
  popupSelector: "#add-modal",
  handleFormSubmit: (data) => {
    cardCreator.addItem(getCardElement(data));
    cardPopup.close();
  },
});

cardPopup.setEventListeners();
