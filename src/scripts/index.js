import "../pages/index.css";

import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import Popup from "./components/Popup.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";

import {
  profilePopup,
  openPopupBtn,
  profileForm,
  nameInput,
  hobbyInput,
  disabledFormElementAdd,
  validationSettings,
  initialCards,
  addCardPopup,
  openFormBtn,
  formElementAdd,
  containerElements,
  placeInput,
  linkInput,
  imagePopup,
} from "./utils/constants.js";

const userInfo = new UserInfo({
  name: ".profile__name",
  hobby: ".profile__hobby",
});

const popupProfile = new Popup(profilePopup);
const popupAddCard = new Popup(addCardPopup);

function openProfilePopup() {
  const { name, hobby } = userInfo.getUserInfo();
  nameInput.value = name;
  hobbyInput.value = hobby;
  editFormValidator.resetValidation();
  popupProfile.open();
}

function submitProfileForm(data) {
  userInfo.setUserInfo({
    name: data["edit-name"],
    hobby: data["edit-hobby"],
  });
  profileFormPopup.close();
}

const profileFormPopup = new PopupWithForm(profilePopup, (data) =>
  submitProfileForm(data)
);
profileFormPopup.setEventListeners();

openPopupBtn.addEventListener("click", openProfilePopup);

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, handleCardClick, ".template");
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  containerElements
);

cardList.renderItems();

function submitAddCardForm() {
  const name = placeInput.value;
  const link = linkInput.value;
  const card = new Card({ name, link }, handleCardClick, ".template");
  const cardElement = card.generateCard();
  containerElements.prepend(cardElement);
  placeInput.value = "";
  linkInput.value = "";
  popupAddCard.close();

  disabledFormElementAdd.setAttribute("disabled", true);
  disabledFormElementAdd.classList.add("popup__save-button_inactive");
}

const addFormPopup = new PopupWithForm(addCardPopup, () => submitAddCardForm());
addFormPopup.setEventListeners();

function openAddCardPopup() {
  formElementAdd.reset();
  addFormValidator.resetValidation();
  popupAddCard.open();
}

openFormBtn.addEventListener("click", openAddCardPopup);

const cardPopup = new PopupWithImage(imagePopup);
function handleCardClick(name, link) {
  cardPopup.open(name, link);
}

const addFormValidator = new FormValidator(validationSettings, formElementAdd);
addFormValidator.enableValidation();
const editFormValidator = new FormValidator(validationSettings, profileForm);
editFormValidator.enableValidation();
