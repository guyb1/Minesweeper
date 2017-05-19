import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowComponent } from './row.component';
import {FreeTile} from "../tile/free-tile";
import {TileComponent} from "../tile/tile.component";
import {MdIconModule} from "@angular/material";
import {By} from "@angular/platform-browser";
import {Mine} from "../tile/mine";

describe('RowComponent', () => {
  let component: RowComponent;
  let fixture: ComponentFixture<RowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MdIconModule],
      declarations: [ RowComponent, TileComponent ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    component.row = [new FreeTile(1,1)];
    component.globalParams = {};
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should be created with X tiles -> 1 tile', () => {
    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    component.row = [new FreeTile(1,1)];
    component.globalParams = {};
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.tile')).length).toBe(1);
  });

  it('should be created with X tiles -> 3 tile', () => {
    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    component.row = [new FreeTile(1,1), new FreeTile(1,2), new Mine(3)];
    component.globalParams = {};
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.tile')).length).toBe(3);
  });

  it('should be created with X tiles -> 0 tile', () => {
    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    component.row = [];
    component.globalParams = {};
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.tile')).length).toBe(0);
  });

  it('should be created with X tiles, superman mode -> 0 tile', () => {
    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    component.row = [];
    component.globalParams = {isSuperman : true};
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.tile.superman-tile')).length).toBe(0);
  });

  it('should be created with X tiles, superman mode -> 1 tile', () => {
    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    component.row = [new FreeTile(1,1)];
    component.globalParams = {isSuperman : true};
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.tile.superman-tile')).length).toBe(1);
  });

  it('should be created with X tiles, superman mode -> 3 tile', () => {
    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    component.row = [new FreeTile(1,1), new FreeTile(1,2), new Mine(3)];
    component.globalParams = {isSuperman : true};
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.tile.superman-tile')).length).toBe(3);
  });
});
