import {Component, OnInit, Input, Inject} from '@angular/core';
import {Game} from "../../models/Game";
import {MdDialogRef, MD_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  public game: Game;
  constructor(public dialogRef: MdDialogRef<ConfigComponent>, @Inject(MD_DIALOG_DATA) public data: any) {
    this.game = data.game;
  }

  ngOnInit() {
  }

}
