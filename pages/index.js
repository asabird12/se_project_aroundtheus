import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#edit-modal");
const profileModalButton = document.querySelector("#edit-modal-close");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileSubtitleInput = document.querySelector("#profile-subtitle-input");
const profileFormElement = profileEditModal.querySelector(
  "#modal-form-profile"
);
const nameInput = profileEditModal.querySelector("#profile-title-input");
const jobInput = profileEditModal.querySelector("#profile-subtitle-input");
const profileName = profileEditModal.querySelector(".profile__title");
const profileJob = profileEditModal.querySelector(".profile__subtitle");
const profileSave = profileEditModal.querySelector(".modal__button");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardList = document.querySelector(".cards__list");
const cardAddButton = document.querySelector(".profile__add-button");
const cardAddModal = document.querySelector("#add-modal");
const cardModalButton = document.querySelector("#add-modal-close");
const cardFormElement = cardAddModal.querySelector("#modal-form-card");
const cardTitleInput = cardAddModal.querySelector("#card-title-input");
const cardImageInput = cardAddModal.querySelector("#card-image-link-input");
const previewModalCloseButton = document.querySelector("#popup-modal-close");
const allModals = document.querySelectorAll(".modal");
const previewModal = document.querySelector("#preview-modal");

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

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileSubtitleInput.value = profileSubtitle.textContent;
  openModal(profileEditModal);
});

profileModalButton.addEventListener("click", () => {
  closeModal(profileEditModal);
});

profileFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  closeModal(profileEditModal);
});

allModals.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      closeModal(modal);
    }
  });
});

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardList.append(cardElement);
});

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const popUpImage = document.querySelector(".modal__image");
  const popUpTitle = document.querySelector(".modal__title");

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });

  cardImageElement.addEventListener("click", () => {
    openModal(previewModal);
    popUpImage.src = data.link;
    popUpImage.alt = data.name;
    popUpTitle.textContent = data.name;
  });

  cardTitleElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  return cardElement;
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
  cardList.prepend(cardElement);
  cardFormElement.reset();
  closeModal(cardAddModal);
});

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editElement = profileEditModal.querySelector(".modal__form");
const addElement = cardAddModal.querySelector(".modal__form");
const editFormValidator = new FormValidator(validationSettings, editElement);
const cardFormValidator = new FormValidator(validationSettings, addElement);
editFormValidator.enableValidation();
cardFormValidator.enableValidation();
