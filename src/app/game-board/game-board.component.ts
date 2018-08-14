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
    console.log(this.deck);
    this.deck.flipDown();
    this.game = this.gameService.getGame(this.deck);

  }

  onflippedUp(isUP: boolean) {
    console.log('Game board');
    console.log(isUP);
    // Usage!
    this.sleep(500).then(() => {
      // Do something after the sleep!
      this.game.checkScore();
    });
  }

  // https://zeit.co/blog/async-and-await
  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  restart() {
    this.getGame();
  }


  ngOnInit() {
    // create cards
    this.getGame();
    // create game
  }

}
