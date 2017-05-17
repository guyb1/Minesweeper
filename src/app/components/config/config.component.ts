import {Component, OnInit, Input, Inject} from '@angular/core';
import {Game} from "../../models/Game";
import {MdDialogRef, MD_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  readonly MAX_WIDTH: number = 300;
  readonly MAX_HEIGHT: number = 300;
  public game: Game;

  constructor(public dialogRef: MdDialogRef<ConfigComponent>, @Inject(MD_DIALOG_DATA) public data: any) {
    this.game = data.game;
  }

  ngOnInit() {
  }

  public isWidthValid(): boolean{
    return this.game.width <= this.MAX_WIDTH && this.game.width >= 1;
  }

  public isHeightValid(): boolean{
    return this.game.height <= this.MAX_HEIGHT && this.game.height >= 1;
  }

  public isMinesNumValid(){
    var maxMines = this.game.width * this.game.height;
    return this.game.mines <= maxMines && this.game.mines >= 1;
  }
}
