import {
  Component, OnInit, Input
} from '@angular/core';
import {Game} from "./game";

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.css']
})
export class MinesweeperComponent {
  @Input() game: Game;
  public viewPortItems: any;

  constructor(){}

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
