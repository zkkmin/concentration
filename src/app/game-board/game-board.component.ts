import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';
import { Deck } from '../deck';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  numberOfCards = 16;
  deck: Deck;
  game: Game;

  constructor(private gameService: GameService) { }

  getGame (): void {
    this.deck = this.gameService.createDeck(this.numberOfCards);
    this.game = this.gameService.getGame(this.deck);
  }

  ngOnInit() {
    // create cards
    this.getGame();
    // create game
  }

}
