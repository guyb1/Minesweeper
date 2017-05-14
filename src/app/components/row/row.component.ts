import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Tile} from "../../models/Tile";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() row: any;
  @Output() tileClick: EventEmitter<Tile> = new EventEmitter();
  @Output() tileShiftClick: EventEmitter<Tile> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleTileClick(event, tile: Tile){
    if(event.shiftKey) {
      this.tileShiftClick.next(tile);
    } else {
      this.tileClick.next(tile);
    }
  }

}
