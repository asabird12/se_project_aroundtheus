export const initialCards = [
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

export const profileTitle = document.querySelector(".profile__title");
export const profileSubtitle = document.querySelector(".profile__subtitle");
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileSubtitleInput = document.querySelector(
  "#profile-subtitle-input"
);
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const profileEditModal = document.querySelector("#edit-modal");
export const profileFormElement = document.querySelector("#modal-form-profile");
export const profileModalButton =
  profileEditModal.querySelector("#edit-modal-close");
export const profileSubmitButton = document.querySelector("#profile-submit");

export const cardAddModal = document.querySelector("#add-modal");
export const cardFormElement = document.querySelector("#modal-form-card");
export const cardAddButton = document.querySelector(".profile__add-button");
export const cardModalButton = cardAddModal.querySelector("#add-modal-close");
export const cardSubmitButton = document.querySelector("#submit-button");

export const cardList = document.querySelector(".cards__list");
export const previewModal = document.querySelector("#preview-modal");
export const previewModalCloseButton =
  previewModal.querySelector("#popup-modal-close");
