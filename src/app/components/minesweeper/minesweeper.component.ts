import {Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewChecked} from '@angular/core';
import {Game} from "../../models/Game";

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.css']
})
export class MinesweeperComponent implements OnInit, OnChanges, AfterViewChecked  {
  @Input() game: Game;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // start spinner
  }

  ngAfterViewChecked(): void {
    // stop spinner
  }

  handleTileClick(tile){
    this.game.chooseTile(tile);
  }

  handleTileShiftClick(tile){
    this.game.flagTile(tile);
  }
}
