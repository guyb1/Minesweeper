import {Component, OnInit, Input} from '@angular/core';
import {Tile} from "../../models/Tile";
import {Mine} from "../../models/Mine";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() tile: Tile;

  constructor() { }

  ngOnInit() {
  }

  isMine(tile:Tile){
    return tile instanceof Mine;
  }

}
