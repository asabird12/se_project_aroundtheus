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
const cardTemplate = document.querySelector("#card-template").content;
const cardList = document.querySelector(".cards__list");
const cardAddButton = document.querySelector(".profile__add-button");
const cardAddModal = document.querySelector("#add-modal");
const cardModalButton = document.querySelector("#add-modal-close");
const cardFormElement = cardAddModal.querySelector("#modal-form-card");
const cardTitleInput = cardAddModal.querySelector("#card-title-input");
const cardImageInput = cardAddModal.querySelector("#card-image-link-input");

profileEditButton.addEventListener("click", () => {
  profileEditModal.classList.add("modal_opened");
  profileTitleInput.value = profileTitle.textContent;
  profileSubtitleInput.value = profileSubtitle.textContent;
});

function closeProfileModal() {
  profileEditModal.classList.remove("modal_opened");
}

profileModalButton.addEventListener("click", () => {
  closeProfileModal();
});

profileFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  closeProfileModal();
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
  const popUpImage = document.querySelector(".card__image");
  const popUpModal = document.querySelector("#popup-modal");
  const popUpModalClose = document.querySelector("#popup-modal-close");

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });

  cardImageElement.addEventListener("click", () => {
    popUpModal.classList.add("modal_opened");
    popUpImage.scr = cardImageElement.src;
  });

  popUpModalClose.addEventListener("click", () => {
    popUpModal.classList.remove("modal_opened");
  });

  cardTitleElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  return cardElement;
}

cardAddButton.addEventListener("click", () => {
  cardAddModal.classList.add("modal_opened");
});

function closeAddModal() {
  cardAddModal.classList.remove("modal_opened");
}

cardModalButton.addEventListener("click", () => {
  closeAddModal();
});

cardFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardImageInput.value;
  const cardElement = getCardElement(name, link);
  cardList.prepend(cardElement);
  closeAddModal();
});
