import {
  Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewChecked, AfterContentInit,
  OnDestroy, Inject
} from '@angular/core';
import {Game} from "../../models/Game";
import {MdDialogRef, MD_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.css']
})
export class MinesweeperComponent implements OnInit, OnChanges, AfterViewChecked, AfterContentInit  {
  // @Input() game: Game;
  public game: Game;

  constructor(public dialogRef: MdDialogRef<any>, @Inject(MD_DIALOG_DATA) public data: any) {
    this.game = data.game;
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
