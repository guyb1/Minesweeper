import {Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewChecked, AfterContentInit} from '@angular/core';
import {Game} from "../../models/Game";

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.css']
})
export class MinesweeperComponent implements OnInit, OnChanges, AfterViewChecked, AfterContentInit  {

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

  ngAfterContentInit(): void {
    // alert('b');
  }

  handleTileClick(tile){
    this.game.chooseTile(tile);
  }

  handleTileShiftClick(tile){
    this.game.flagTile(tile);
  }
}
