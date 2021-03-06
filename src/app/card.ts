export class Card {
    cardNumber: string;
    cardImage: string;
    isFaceUp: boolean;
    done = false;

    constructor (cardNumber: string, cardImage: string, isFaceup: boolean) {
        this.cardNumber = cardNumber;
        this.cardImage = cardImage;
        this.isFaceUp = isFaceup;
    }
}
