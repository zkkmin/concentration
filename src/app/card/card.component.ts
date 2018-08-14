import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  private _card;

  @Output() flippedUp = new EventEmitter<boolean>();
  @Input()
  set card(card: Card) {
    this._card = card;
  }

  get card(): Card {
    return this._card;
  }

  constructor() {
   }

  ngOnInit() {
  }

  flip() {
    console.log(this.card.isFaceUp);
    if (!this.card.isFaceUp) {
      this.card.isFaceUp = true;

      this.flippedUp.emit(true);
      console.log(this.card.isFaceUp);
    }
  }

}
