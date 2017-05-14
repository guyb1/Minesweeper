import { Component } from '@angular/core';
import {Game} from "./models/Game";
import {MdDialog} from "@angular/material";
import {MinesweeperComponent} from "./components/minesweeper/minesweeper.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app works!';
  public game: Game;
  public dialog: MdDialog;

  constructor(dialog: MdDialog){
    this.dialog = dialog;
  }

  startClick(){
    this.game = new Game(15, 15, 5);
    this.game.start();

    var diagRef = this.dialog.open(MinesweeperComponent,{height: '400px',
      width: '600px'});
    diagRef.componentInstance.game = this.game;
  }
}
