import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinesweeperComponent } from './minesweeper.component';
import {TileComponent} from "../tile/tile.component";
import {RowComponent} from "../row/row.component";
import {MdIconModule, MdInputModule, MdCardModule, MdCheckboxModule} from "@angular/material";
import {Game} from "./game";
import {VirtualScrollModule} from "angular2-virtual-scroll";
import {FormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Mine} from "../tile/mine";
import {FreeTile} from "../tile/free-tile";

describe('MinesweeperComponent', () => {
  let component: MinesweeperComponent;
  let fixture: ComponentFixture<MinesweeperComponent>;
  let activeInput: HTMLInputElement;
  let flagsInput: HTMLInputElement;
  let widthInput: HTMLInputElement;
  let heightInput: HTMLInputElement;
  let minesInput: HTMLInputElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MdIconModule, VirtualScrollModule, MdInputModule, MdCardModule, FormsModule, MdCheckboxModule, BrowserAnimationsModule],
      declarations: [ RowComponent, TileComponent, MinesweeperComponent ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    fixture = TestBed.createComponent(MinesweeperComponent);
    component = fixture.componentInstance;
    component.game = new Game(1, 1, 1, false);
    component.game.start();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should be in active status', () => {
    fixture = TestBed.createComponent(MinesweeperComponent);
    component = fixture.componentInstance;
    component.game = new Game(1, 1, 1, false);
    component.game.start();
    fixture.detectChanges();
    activeInput = fixture.debugElement.query(By.css('.game-status')).nativeElement;
    expect(activeInput.value).toBe('Active');
  });

  it('should be in inactive status', () => {
    fixture = TestBed.createComponent(MinesweeperComponent);
    component = fixture.componentInstance;
    component.game = new Game(1, 1, 1, false);
    component.game.start();
    component.handleTileClick(component.game.board.getRows()[0][0]);
    fixture.detectChanges();
    activeInput = fixture.debugElement.query(By.css('.game-status')).nativeElement;
    expect(activeInput.value).toBe('Inactive');
  });

  it('should show 1 flags left', () => {
    fixture = TestBed.createComponent(MinesweeperComponent);
    component = fixture.componentInstance;
    component.game = new Game(1, 1, 1, false);
    component.game.start();
    fixture.detectChanges();
    flagsInput = fixture.debugElement.query(By.css('.flags-left')).nativeElement;
    expect(flagsInput.value).toBe('1');
  });

  it('should show 30 flags left', () => {
    fixture = TestBed.createComponent(MinesweeperComponent);
    component = fixture.componentInstance;
    component.game = new Game(15, 15, 30, false);
    component.game.start();
    fixture.detectChanges();
    flagsInput = fixture.debugElement.query(By.css('.flags-left')).nativeElement;
    expect(flagsInput.value).toBe('30');
  });

  it('should show 29 flags left -> one tile was flagged', () => {
    fixture = TestBed.createComponent(MinesweeperComponent);
    component = fixture.componentInstance;
    component.game = new Game(15, 15, 30, false);
    component.game.start();
    component.handleTileShiftClick(component.game.board.getRows()[0][0]);
    fixture.detectChanges();
    flagsInput = fixture.debugElement.query(By.css('.flags-left')).nativeElement;
    expect(flagsInput.value).toBe('29');
  });

  it('should show 28 flags left -> two tiles were flagged', () => {
    fixture = TestBed.createComponent(MinesweeperComponent);
    component = fixture.componentInstance;
    component.game = new Game(15, 15, 30, false);
    component.game.start();
    component.handleTileShiftClick(component.game.board.getRows()[0][0]);
    component.handleTileShiftClick(component.game.board.getRows()[0][1]);
    fixture.detectChanges();
    flagsInput = fixture.debugElement.query(By.css('.flags-left')).nativeElement;
    expect(flagsInput.value).toBe('28');
  });

  it('should be 300 width', () => {
    fixture = TestBed.createComponent(MinesweeperComponent);
    component = fixture.componentInstance;
    component.game = new Game(300, 290, 333, false);
    component.game.start();
    fixture.detectChanges();
    widthInput = fixture.debugElement.query(By.css('.board-width')).nativeElement;
    expect(widthInput.value).toBe('300');
  });

  it('should be 290 height', () => {
    fixture = TestBed.createComponent(MinesweeperComponent);
    component = fixture.componentInstance;
    component.game = new Game(300, 290, 333, false);
    component.game.start();
    fixture.detectChanges();
    heightInput = fixture.debugElement.query(By.css('.board-height')).nativeElement;
    expect(heightInput.value).toBe('290');
  });

  it('should be 333 mines', () => {
    fixture = TestBed.createComponent(MinesweeperComponent);
    component = fixture.componentInstance;
    component.game = new Game(300, 290, 333, false);
    component.game.start();
    fixture.detectChanges();
    minesInput = fixture.debugElement.query(By.css('.mines')).nativeElement;
    expect(minesInput.value).toBe('333');
  });

  //Tests for Game class
  it('game -> mine number test', () => {
    let game = new Game(10, 10, 40, false);
    game.start();
    let mines = 0;

    for(var i = 0; i < 10; i++){
      for(var j = 0; j < 10; j++){
        if(game.board.getRows()[i][j] instanceof Mine) mines++;
      }
    }

    expect(mines).toBe(40);
  });

  it('game -> large init test', () => {
    var game = new Game(300, 300, 90000, false);
    game.start();
    let mines = 0;

    for(var i = 0; i < 300; i++){
      for(var j = 0; j < 300; j++){
        if(game.board.getRows()[i][j] instanceof Mine) mines++;
      }
    }

    expect(mines).toBe(90000);
  });

  it('game -> large init test', () => {
    var game = new Game(300, 300, 45000, false);
    game.start();
    let mines = 0;

    for(var i = 0; i < 300; i++){
      for(var j = 0; j < 300; j++){
        if(game.board.getRows()[i][j] instanceof Mine) mines++;
      }
    }

    expect(mines).toBe(45000);
  });

  it('game -> reveal tiles test', () => {
    var game = new Game(300, 300, 1, false);
    game.start();
    var tilesWithOne = 0;
    var tilesWithZero = 0;
    var otherTiles = 0;

    for(var i = 0; i < 300; i++){
      for(var j = 0; j < 300; j++){
        if(game.board.getRows()[i][j] instanceof FreeTile){
          var tile = game.board.getRows()[i][j] as FreeTile;
          if(tile.minesAround == 0) tilesWithZero ++;
          else if(tile.minesAround == 1) tilesWithOne++;
          else otherTiles++;
        }
      }
    }

    expect(tilesWithOne).toBeLessThanOrEqual(8);
    expect(tilesWithZero).toBeGreaterThanOrEqual(89992);
    expect(otherTiles).toBe(0);
  });
});
