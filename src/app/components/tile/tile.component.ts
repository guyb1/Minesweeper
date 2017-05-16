import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Tile} from "../../models/Tile";
import {Mine} from "../../models/Mine";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit, OnDestroy {
  @Input() tile: Tile;
  // @Input() isSuperman: boolean;
  @Input() globalParams: any;

  constructor() {

  }

  ngOnInit() {
  }

  isMine(){
    return this.tile instanceof Mine;
  }

  ngOnDestroy(): void {
    this.tile = null;
    // this.isSuperman = null;
    this.globalParams = null;
  }

}
