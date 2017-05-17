import {
  Component, OnInit, Input
} from '@angular/core';
import {Game} from "../../models/Game";

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.css']
})
export class MinesweeperComponent implements OnInit  {
  @Input() game: Game;
  public viewPortItems: any;

  constructor(){}

  ngOnInit() {
  }

  // Left click handler
  handleTileClick(tile){
    if(this.game.chooseTile(tile)){
      alert('Game Over');
    }
  }

  // Shift + Left click handler
  handleTileShiftClick(tile){
    if(this.game.flagTile(tile)){
      alert("You won!");
    }
  }
}
