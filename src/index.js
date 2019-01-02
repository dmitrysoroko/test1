import * as valid from 'card-validator';
import { storage } from './storage'
import Tooltip from './components/Tooltip'
import './style.scss'

let commentLength = 1024;
let cardForDelete;
let tooltip = new Tooltip();

storage.initStorage();

let modalDialog = document.getElementById('modalDialog');
let errorMessage = document.getElementById('errorMessage');
let cardList = document.getElementById('cardList');
let cardNumberInput = document.getElementById('cardNumberInput');
let cardCommentInput = document.getElementById('cardCommentInput');
let addCardButton = document.getElementById('addCardButton');
let modalCancelButton = document.getElementById('modalCancelButton');
let modalDeleteButton = document.getElementById('modalDeleteButton');
addCardButton.addEventListener('click', addCard);
cardNumberInput.addEventListener('keydown', errorMessageClear);
cardCommentInput.addEventListener('keydown', errorMessageClear);

modalCancelButton.addEventListener('click', dialogClose);
modalDeleteButton.addEventListener('click', deleteCard);
listRender();

function errorMessageClear() {
    errorMessage.innerHTML = '&nbsp;';
}

function deleteCard() {
    dialogClose();
    storage.deleteCard(cardForDelete);
    listRender();
}

function dialogOpen() {
    modalDialog.classList.add('open');
}

function dialogClose() {
    modalDialog.classList.remove('open');
}

function CardComponent(card) {
    let element = document.createElement('div');
    element.classList.add('card');
    let cardNumbers = document.createElement('span');
    cardNumbers.classList.add('card-numbers');
    let cardComment = document.createElement('span');
    cardComment.classList.add('card-comment');
    let img = document.createElement('img');
    let deleteButton = document.createElement('button');
    let deleteIcon = document.createElement('i');
    deleteButton.className = 'btn';
    deleteIcon.className = 'fa fa-close';
    deleteButton.appendChild(deleteIcon);
    deleteButton.addEventListener('click', () => {
        cardForDelete = card.numbers;
        dialogOpen();
    });
    img.src = card.type === 'visa' ? 'dist/visa.png' : 'dist/mastercard.png';
    cardNumbers.innerHTML = card.numbers;
    cardComment.innerHTML = card.comment;
    cardComment.setAttribute('tooltip-title', card.comment);
    element.appendChild(img);
    element.appendChild(cardNumbers);
    element.appendChild(cardComment);
    element.appendChild(deleteButton);
    return element;
}

function addCard() {
    if (storage.isCardExists(cardNumberInput.value)) {
        errorMessage.innerHTML = 'this card already exists';
        return
    }
    if (cardCommentInput.value.length > commentLength) {
        errorMessage.innerHTML = `Max comment length is ${commentLength}`;
        return
    }

    let numberValidation = valid.number(cardNumberInput.value);
    let type = numberValidation.card ? numberValidation.card.type : null;

    if (numberValidation.isValid && (type === 'visa' || type === 'mastercard')) {
        let card = {
            type,
            numbers: cardNumberInput.value,
            comment: cardCommentInput.value,
        };
        storage.addCard(card);
        listRender()
    } else {
        errorMessage.innerHTML = 'card not valid';
    }
}

function listRender() {
    let cards = storage.getCards();
    while (cardList.firstChild) {
        cardList.removeChild(cardList.firstChild);
    }
    let label = document.createElement('label');
    label.innerHTML = 'Cards';
    cardList.appendChild(label);
    cards.forEach(card => cardList.appendChild(CardComponent(card)));
    tooltip.bindEvents();
}
