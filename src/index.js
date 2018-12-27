import _ from 'lodash';
import * as valid from 'card-validator';
import { storage } from './storage'
storage.initStorage();
let cardList = document.getElementById('cardList');
listRender();

function CardComponent(card) {
    let element = document.createElement('div');
    let text = document.createElement('span');
    let img = document.createElement('img');
    let deleteButton = document.createElement('button');
    let deleteIcon = document.createElement('i');
    deleteButton.className = 'btn';
    deleteIcon.className = 'fa fa-close';
    deleteButton.appendChild(deleteIcon);
    deleteButton.addEventListener('click', () => {
        storage.deleteCard(card.numbers);
        listRender();
    });
    img.src = card.type === 'visa' ? 'dist/visa.png' : 'dist/mastercard.png';
    text.innerHTML = _.join([card.numbers, card.comment], ' ');
    element.appendChild(img);
    element.appendChild(text);
    element.appendChild(deleteButton);
    return element;
}

function onStorageEvent(e){
    console.log(e, "storage event");
}

window.addEventListener('storage', onStorageEvent);

let cardNumberInput = document.getElementById('cardNumberInput');
let cardCommentInput = document.getElementById('cardCommentInput');
let addCardButton = document.getElementById('addCardButton');


function addCard() {
    let numberValidation = valid.number(cardNumberInput.value);
    let type = numberValidation.card.type;

    if (storage.isCardExists(cardNumberInput.value)) {
        console.error('this card already exists');
        return
    }

    if (numberValidation.isValid && (type === 'visa' || type === 'mastercard')) {
        let card = {
            type,
            numbers: cardNumberInput.value,
            comment: cardCommentInput.value,
        };
        storage.addCard(card);
        listRender()
    } else {
        console.error('card not valid')
    }
}

addCardButton.addEventListener('click', addCard);

function listRender() {
    let cards = storage.getCards();
    while (cardList.firstChild) {
        cardList.removeChild(cardList.firstChild);
    }
    cards.forEach(card => cardList.appendChild(CardComponent(card)))
}