import { Component } from '@angular/core';
import {Game} from "./components/minesweeper/game";
import {MdDialog, MdDialogRef} from "@angular/material";
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {ConfigComponent} from "./components/config/config.component";
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('logoActive', [
    state('active', style({
      'width': '200px',
      'padding-top':'0',
      'margin-left':'0',
      transform: 'scale(0.6)',
    })),
    state('inactive',   style({
      transform: 'scale(1)'
    })),
    transition('active => inactive', animate('500ms ease-in')),
    transition('inactive => active', animate('500ms ease-out'))
  ]),
    trigger('gameActive', [
      state('active', style({
        opacity:1
      })),
      state('inactive',   style({
        opacity:0
      })),
      transition('active => inactive', animate('500ms')),
      transition('inactive => active', animate('500ms'))
    ]),
    trigger('bottomTextActive', [
      state('active', style({
        opacity:1
      })),
      state('inactive',   style({
        opacity:0,
        'margin-top':0
      })),
      transition('active => inactive', animate('300ms')),
      transition('inactive => active', animate('500ms'))
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
        animate(1000, style({opacity:1}))
      ]),
      transition(':leave', [
        animate(500, style({opacity:0}))
      ])
    ])
  ]
})
export class AppComponent {
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
  }

  public openConfig(){
    this.diagRef = this.dialog.open(ConfigComponent, {disableClose: true, data: {game: this.game}});
  }

  public stopClick(){
    this.game.stop();
    this.playMode = false;
  }

  public startClick(){
    this.playMode = true;

    setTimeout(()=>{this.game.start();}, 500);

  }
}
