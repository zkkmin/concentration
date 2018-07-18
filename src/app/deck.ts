import { Card } from './card';

export class Deck {
    cards: Card [];

    constructor (cards: Card []) {
        this.cards = cards;
    }

    flipDown (): void {
        console.log(this.cards);
        for (let i = 0; i < this.cards.length; i++) {
            console.log(this.cards[i]);
            this.cards[i].isFaceUp = false;
        }
    }

    shuffle (): void {
        let currentIndex = this.cards.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    }
}
