import { ESC_CODE } from '../utils/constants.js';

export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
    }
    open() {
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        this._popup.classList.add('popup_opened');
        this.setEventListeners()
    }
    close() {
        document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
        this._popup.classList.remove('popup_opened');
    }
    _handleEscClose(evt) {
        if (evt.key === ESC_CODE) {
            this.close();
        }
    }
    setEventListeners() {
        // const popups = document.querySelectorAll('.popup')

        // popups.forEach((popup) => {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close()
            }
            if (evt.target.classList.contains('popup__close')) {
                this.close()
            }
        })


    }
}