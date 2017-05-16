import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Tile} from "../../models/Tile";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit, OnDestroy {
  @Input() row: any;
  // @Input() isSuperman: boolean;
  @Input() globalParams: any;
  @Output() tileClick: EventEmitter<Tile>;
  @Output() tileShiftClick: EventEmitter<Tile>;

  constructor() {
    this.tileClick = new EventEmitter();
    this.tileShiftClick= new EventEmitter();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.row = null;
    // this.isSuperman = null;
    this.globalParams = null;
    this.tileClick.unsubscribe();
    this.tileShiftClick.unsubscribe();
    this.tileClick = null;
    this.tileShiftClick = null;
  }

  handleTileClick(event, tile: Tile){
    if(event.shiftKey) {
      this.tileShiftClick.next(tile);
    } else {
      this.tileClick.next(tile);
    }
  }

}
