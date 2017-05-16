import { Component } from '@angular/core';
import {Game} from "./models/Game";
import {MdDialog, MdDialogRef} from "@angular/material";
import {MinesweeperComponent} from "./components/minesweeper/minesweeper.component";
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {ConfigComponent} from "./components/config/config.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app works!';
  public game: Game;
  public playMode: boolean;
  public diagRef: MdDialogRef<any>;

  constructor(public dialog: MdDialog, public iconRegistry: MdIconRegistry, public sanitizer: DomSanitizer){
    this.playMode = false;
    this.game = new Game(10, 10, 5, false); // default settings
    iconRegistry.addSvgIcon(
      'mine',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/emoticon-poop.svg'));
    iconRegistry.addSvgIcon(
      'flag',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/bomb.svg'));

    // this.dialog.afterOpen.subscribe((ref: MdDialogRef<any>) => {
    //   alert('a');
    // });
  }

  openConfig(){
    this.diagRef = this.dialog.open(ConfigComponent, {disableClose: false, data: {game: this.game}});
  }

  stopClick(){
    this.game.stop();
    this.playMode = false;
    // this.game = new Game(this.game.width, this.game.height, this.game.mines, this.game.isSuperman);
  }

  startClick(){
    // this.game = new Game(width, height, mines, superman);
    // this.game.start();
    this.game.start();
    this.playMode = true;

    // this.diagRef = this.dialog.open(MinesweeperComponent, {height: '80%', width: '80%', disableClose: false, data: {game: this.game}});
    // //this.diagRef.componentInstance.game = this.game;
    //
    // this.diagRef.afterClosed().subscribe(result => {
    //   this.game = null;
    //   this.diagRef = null;
    // });



    // this.diagRef = this.dialog.open(MinesweeperComponent, {height: '80%', width: '80%', disableClose: false});
    // this.diagRef.componentInstance.game = game;
  //   this.diagRef.componentInstance.game = this.game;
    // this.diagRef.afterClosed().subscribe(result => {
    //   this.game.board.getRows()._destroy();
    //   this.game.board.getRows()._dispose();
    //   this.game = null;
    //   this.diagRef.afterClosed().unsubscribe();
    // });

  }
}
