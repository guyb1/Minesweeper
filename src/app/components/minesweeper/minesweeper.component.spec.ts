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

describe('MinesweeperComponent', () => {
  let component: MinesweeperComponent;
  let fixture: ComponentFixture<MinesweeperComponent>;
  let activeInput: HTMLInputElement;
  let flagsInput: HTMLInputElement;
  let widthInput: HTMLInputElement;
  let heightInput: HTMLInputElement;
  let minesInput: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MdIconModule, VirtualScrollModule, MdInputModule, MdCardModule, FormsModule, MdCheckboxModule, BrowserAnimationsModule],
      declarations: [ RowComponent, TileComponent, MinesweeperComponent ]
    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(MinesweeperComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

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
});
