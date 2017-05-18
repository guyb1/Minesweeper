import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileComponent } from './tile.component';
import {FreeTile} from "./free-tile";
import {MdIconModule} from "@angular/material";
import {Mine} from "./mine";

describe('TileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MdIconModule],
      declarations: [ TileComponent ]
    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TileComponent);
  //   component = fixture.componentInstance;
  // });

  it('should be created', () => {
    const fixture = TestBed.createComponent(TileComponent);
    const component = fixture.componentInstance;
    component.tile = new FreeTile(1,1);
    component.globalParams = {};
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should be mine', () => {
    const fixture = TestBed.createComponent(TileComponent);
    const component = fixture.componentInstance;
    component.tile = new Mine(1);
    component.globalParams = {};
    fixture.detectChanges();
    expect(component.isMine()).toBe(true);
  });

  it('should not be mine', () => {
    const fixture = TestBed.createComponent(TileComponent);
    const component = fixture.componentInstance;
    component.tile = new FreeTile(1,1);
    component.globalParams = {};
    fixture.detectChanges();
    expect(component.isMine()).toBe(false);
  });

  it('should be revealed', () => {
    const fixture = TestBed.createComponent(TileComponent);
    const component = fixture.componentInstance;
    component.tile = new FreeTile(1,20);
    component.tile.isRevealed = true;
    component.globalParams = {};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.tile').textContent).toContain('20');
  });
});
