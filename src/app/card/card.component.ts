import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private _card;

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
      console.log(this.card.isFaceUp);
    }
  }

}
