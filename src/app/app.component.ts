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
  public diagRef;

  constructor(dialog: MdDialog){
    this.dialog = dialog;
  }

  startClick(width: number, height: number, mines: number, superman: boolean){
    this.game = new Game(width, height, mines);
    this.game.start();

    this.diagRef = this.dialog.open(MinesweeperComponent, {height: '80%', width: '80%'});
  // ,{height: '400px', width: '600px'}
    this.diagRef.componentInstance.game = this.game;
  }
}
