document.addEventListener('DOMContentLoaded', () => {

    class Card {
        constructor(name, img) {
            this.name = name;
            this.img = img;
        }
    }

    const BLANK = new Card('blank', 'images/blank.png');
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

    function loadBoard() {
        CARDS.forEach((el, idx) => {
            let card = document.createElement('img');
            card.setAttribute('src', BLANK.img);
            card.setAttribute('data-id', idx);
            // TODO: click event
            BOARD.appendChild(card)
        });
    }

    loadBoard();
});
