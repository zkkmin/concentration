import { Injectable } from '@angular/core';
import { Card } from './card';
import { Deck } from './deck';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  createDeck (count: number): Deck {
    const cards: Card [] = [];
    const maxNumber = count / 2;
    for (let i = 1; i <= maxNumber; i++) {
      cards.push(new Card(i.toString(), '', true));
      cards.push(new Card(i.toString(), '', true));
    }
    const deck = new Deck(cards);
    deck.shuffle();
    return deck;
  }

  getGame (deck: Deck): Game {
    return new Game(deck);
  }

}
