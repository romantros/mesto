import Popup from './Popup.js';

export default class Card {
  constructor(data, openImage, template) {
    this._name = data.name;
    this._link = data.link;
    this._openImage = openImage;
    this._template = template;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    const elementImage = this._element.querySelector('.element__image');
    const elementPlace = this._element.querySelector('.element__place');
    elementPlace.textContent = this._name;
    elementImage.src = this._link;
    elementImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }

  _likeCard() {
    this._likeBtn.classList.toggle("element__like_active");
  }

  _deleteCard() {
    this._element.remove();
  }  

  _setEventListeners() {
    this._removeBtn = this._element.querySelector('.element__basket');
    this._removeBtn.addEventListener('click', () => this._deleteCard());

    this._likeBtn = this._element.querySelector('.element__like');
    this._likeBtn.addEventListener('click', () => this._likeCard());

    this._elementImage = this._element.querySelector('.element__image');
    this._elementImage.addEventListener('click', () => this._openImage(this._name, this._link))
  }
}