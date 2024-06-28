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
const popUpModalClose = document.querySelector("#popup-modal-close");

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
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
  const previewModal = document.querySelector("#preview-modal");
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

  popUpModalClose.addEventListener("click", () => {
    closeModal(previewModal);
  });

  cardTitleElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  return cardElement;
}

cardAddButton.addEventListener("click", () => {
  openModal(cardAddModal);
});

cardModalButton.addEventListener("click", () => {
  closeModal(cardAddModal);
});

cardFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const image = cardImageInput.value;
  const newCardElement = getCardElement(data);

  cardList.prepend(newCardElement);
  document.cardFormElement("#add-modal").reset();
  closeModal(cardAddModal);
});
