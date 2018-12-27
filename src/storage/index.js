const initStorage = () => {
    let cards = localStorage.getItem('cards');
    if (!cards) localStorage.setItem('cards', JSON.stringify([]));
};

const getCards = () => JSON.parse(localStorage.getItem('cards'));

const addCard = card => {
    let cards = JSON.parse(localStorage.getItem('cards'));
    cards.push(card);
    localStorage.setItem('cards', JSON.stringify(cards));
};

const isCardExists = cardNumbers => {
    let cards = getCards();
    return Boolean(cards.find(card => card.numbers === cardNumbers))
};

const deleteCard = cardNumbers => {
    let cards = getCards();
    localStorage.setItem('cards', JSON.stringify(cards.filter(card => card.numbers !== cardNumbers)));
};

export const storage = {
    initStorage,
    getCards,
    addCard,
    isCardExists,
    deleteCard,
};
