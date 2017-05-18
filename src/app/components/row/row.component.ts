import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Tile} from "../tile/tile";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit, OnDestroy {
  @Input() row: any;
  @Input() globalParams: any;
  @Output() tileClick: EventEmitter<Tile>;
  @Output() tileShiftClick: EventEmitter<Tile>;

  constructor() {
    this.tileClick = new EventEmitter();
    this.tileShiftClick= new EventEmitter();
  }

  ngOnInit() {
  }

  // Kills component
  ngOnDestroy(): void {
    this.row = null;
    this.globalParams = null;
    this.tileClick.unsubscribe();
    this.tileShiftClick.unsubscribe();
    this.tileClick = null;
    this.tileShiftClick = null;
  }

  // Tile click handler
  handleTileClick(event, tile: Tile){
    // Checks what kind of click occurred
    if(event.shiftKey) { // Shift + Left click
      this.tileShiftClick.next(tile);
    } else { // Left click
      this.tileClick.next(tile);
    }
  }
}
