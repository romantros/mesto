let overlay = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__editButton');
let closePopupBtn = overlay.querySelector('.popup__close');

let formElement = overlay.querySelector('.popup__container');
let nameInput = overlay.querySelector('.popup__name');
let profileName = document.querySelector('.profile__name');
let jobInput = overlay.querySelector('.popup__hobby');
let profileHobby = document.querySelector('.profile__hobby');

let togglePopup = function(evt) {
    evt.preventDefault();
    nameInput.value = profileName.textContent;
    jobInput.value = profileHobby.textContent;
    overlay.classList.toggle('popup_opened');
}
let closePopup = function(evt) {
    if (evt.target === evt.currentTarget) {
        togglePopup(evt);
    }
}

openPopupBtn.addEventListener('click', togglePopup);
closePopupBtn.addEventListener('click', togglePopup);
overlay.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileHobby.textContent = jobInput.value;
    togglePopup(evt);
}

formElement.addEventListener('submit', formSubmitHandler);