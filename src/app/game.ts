import { Deck } from './deck';
import { Card } from './card';

export class Game {
    deck: Deck;
    score = 0;
    move = 0;
    match = 0;

    constructor (deck: Deck) {
        this.deck = deck;
    }

    deal (): void {
        this.deck.shuffle();
        this.deck.flipDown();
    }

    checkScore (): void {
        const playedCards: Card [] = this.deck.cards.filter(card => card.isFaceUp === true && card.done === false);
        console.log(playedCards);
        this.move ++;
        if (playedCards.length === 2) {
            if (playedCards[0].cardNumber === playedCards[1].cardNumber) {
                playedCards[0].done = true;
                playedCards[1].done = true;
                this.match++;
                this.score = (Math.round(this.match / this.move * 100) / 100) * 200;
            } else {
                playedCards[0].isFaceUp = false;
                playedCards[1].isFaceUp = false;
            }
        }
        console.log(this.score);
    }
}
