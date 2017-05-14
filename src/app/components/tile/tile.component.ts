import {Component, OnInit, Input} from '@angular/core';
import {Tile} from "../../models/Tile";
import {Mine} from "../../models/Mine";
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() tile: Tile;

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'mine',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/emoticon-poop.svg'));
    iconRegistry.addSvgIcon(
      'flag',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/bomb.svg'));
  }

  ngOnInit() {
  }

  isMine(){
    return this.tile instanceof Mine;
  }

}
