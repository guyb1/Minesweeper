import { Component } from '@angular/core';
import {Game} from "./models/Game";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app works!';
  public game: Game;

  constructor(){
    this.game = new Game(300, 300, 5);
    this.game.start();

    // setTimeout(function() {
    //   this.game = new Game(300, 300, 6);
    //   this.game.initialize();
    // }.bind(this), 1000);
  }
}
