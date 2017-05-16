import { Component } from '@angular/core';
import {Game} from "./models/Game";
import {MdDialog, MdDialogRef} from "@angular/material";
import {MinesweeperComponent} from "./components/minesweeper/minesweeper.component";
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app works!';
  public game: Game;
  public diagRef: MdDialogRef<any>;

  constructor(public dialog: MdDialog, public iconRegistry: MdIconRegistry, public sanitizer: DomSanitizer){
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

  startClick(width: number, height: number, mines: number, superman: boolean){
    // this.game = new Game(width, height, mines, superman);
    // this.game.start();
    this.game = new Game(width, height, mines, superman);
    this.game.start();

    this.diagRef = this.dialog.open(MinesweeperComponent, {height: '80%', width: '80%', disableClose: false, data: {game: this.game}});
    //this.diagRef.componentInstance.game = this.game;

    this.diagRef.afterClosed().subscribe(result => {
      this.game = null;
      this.diagRef = null;
    });



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
