let overlay = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
let closePopupBtn = overlay.querySelector('.popup__close');
let formElement = overlay.querySelector('.popup__container');
let nameInput = overlay.querySelector('.popup__edit_name');
let profileName = document.querySelector('.profile__name');
let jobInput = overlay.querySelector('.popup__edit_hobby');
let profileHobby = document.querySelector('.profile__hobby');

let togglePopup = function(evt) {
    evt.preventDefault();
    if(overlay.className === 'popup') {
        nameInput.value = profileName.textContent;
        jobInput.value = profileHobby.textContent;
    }
    overlay.classList.toggle('popup_opened');
}

let closePopup = function(evt) {
    if (evt.target === evt.currentTarget) {
        togglePopup(evt);
    }
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileHobby.textContent = jobInput.value;
    togglePopup(evt);
}

openPopupBtn.addEventListener('click', togglePopup);
closePopupBtn.addEventListener('click', togglePopup);
overlay.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);