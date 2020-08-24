document.addEventListener('DOMContentLoaded', () => {

    class Card {
        constructor(name, img) {
            this.name = name;
            this.img = img;
        }
    }

    const BLANK = new Card('blank', 'images/blank.png');
    const WHITE = new Card('white', 'images/white.png');
    const CHEESEBURGER = new Card('cheeseburger', 'images/cheeseburger.png');
    const FRIES = new Card('fries', 'images/fries.png');
    const HOTDOG = new Card('hotdog', 'images/hotdog.png');
    const ICE_CREAM = new Card('ice-cream', 'images/ice-cream.png');
    const MILKSHAKE = new Card('milkshake', 'images/milkshake.png');
    const PIZZA = new Card('pizza', 'images/pizza.png');

    const CARDS = [
        CHEESEBURGER, CHEESEBURGER,
        FRIES, FRIES,
        HOTDOG, HOTDOG,
        ICE_CREAM, ICE_CREAM,
        MILKSHAKE, MILKSHAKE,
        PIZZA, PIZZA
    ];

    const BOARD = document.querySelector('.board');

    let chosenCards = []
    let chosenCardsIds = []
    let score = document.querySelector('#score');
    score.textContent = 0;

    CARDS.sort(() => 0.5 - Math.random());

    function loadBoard() {
        CARDS.forEach((el, idx) => {
            let card = document.createElement('img');
            card.setAttribute('src', BLANK.img);
            card.setAttribute('data-id', idx);
            card.addEventListener('click', flipCard);
            BOARD.appendChild(card);
        });
    }

    function checkMatch() {
        let imgs = document.querySelectorAll('img');
        if (chosenCards[0].name === chosenCards[1].name) {
            imgs[chosenCardsIds[0]].setAttribute('src', WHITE.img);
            imgs[chosenCardsIds[1]].setAttribute('src', WHITE.img);
            points = parseInt(score.textContent) + 1;
            score.textContent = (points === CARDS.length / 2) ? 'YOU WON!': points;
        } else {
            imgs[chosenCardsIds[0]].setAttribute('src', BLANK.img);
            imgs[chosenCardsIds[1]].setAttribute('src', BLANK.img);
        }
        chosenCards = [];
        chosenCardsIds = [];
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        chosenCards.push(CARDS[cardId]);
        chosenCardsIds.push(cardId);
        this.setAttribute('src', CARDS[cardId].img);
        if (chosenCards.length === 2) {
            setTimeout(checkMatch, 500);
        }

    }

    loadBoard();
});
