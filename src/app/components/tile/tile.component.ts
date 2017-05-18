import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Tile} from "./tile";
import {Mine} from "./mine";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnDestroy {
  @Input() tile: Tile;
  @Input() globalParams: any;

  constructor() {}

  isMine(){
    return this.tile instanceof Mine;
  }

  ngOnDestroy(): void {
    this.tile = null;
    this.globalParams = null;
  }
}
