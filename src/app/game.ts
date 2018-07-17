import { Deck } from './deck';
import { Card } from './card';

export class Game {
    deck: Deck;
    score = 0;

    constructor (deck: Deck) {
        this.deck = deck;
    }

    deal (): void {
        this.deck.shuffle();
        this.deck.flipDown();
    }

    checkScore (): void {
        const faceupCards: Card [] = this.deck.cards.filter(card => card.isFaceUp === true);
        if (faceupCards.length === 2) {
            if (faceupCards[0].cardNumber === faceupCards[1].cardNumber) {
                this.score++;
            }
        }
    }
}
