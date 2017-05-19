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

  it('should be created', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new FreeTile(1,1);
    component.globalParams = {};
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should be mine', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new Mine(1);
    component.globalParams = {};
    fixture.detectChanges();
    expect(component.isMine()).toBe(true);
  });

  it('should not be mine', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new FreeTile(1,1);
    component.globalParams = {};
    fixture.detectChanges();
    expect(component.isMine()).toBe(false);
  });

  it('should be revealed', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new FreeTile(1,20);
    component.tile.isRevealed = true;
    component.globalParams = {};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.tile').textContent).toContain('20');
  });

  it('should be revealed -> revealed, superman mode off', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new FreeTile(1,3);
    component.tile.isRevealed = true;
    component.globalParams = {isSuperman : false};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.tile').textContent).toContain('3');
  });

  it('should be revealed -> revealed, superman mode on', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new FreeTile(1,3);
    component.tile.isRevealed = true;
    component.globalParams = {isSuperman : true};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.tile').textContent).toContain('3');
  });

  it('should be empty -> not revealed, superman mode on', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new FreeTile(1,3);
    component.tile.isRevealed = false;
    component.globalParams = {isSuperman : true};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.tile.superman-tile').textContent).toMatch(/^\s*$/);
  });

  it('should not be in superman mode', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new FreeTile(1,3);
    component.tile.isRevealed = false;
    component.globalParams = {isSuperman : false};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.tile.superman-tile')).toBeNull();
  });

  // Shouldn't happen
  it('should be revealed mine', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new Mine(1);
    component.tile.isRevealed = true;
    component.globalParams = {isSuperman : false};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const nodeAttributes = compiled.querySelector('md-icon').attributes as NamedNodeMap;
    expect(nodeAttributes.getNamedItem('svgIcon').value).toBe('mine');
  });

  it('should be revealed mine -> superman mode', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new Mine(1);
    component.tile.isRevealed = false;
    component.globalParams = {isSuperman : true};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const nodeAttributes = compiled.querySelector('md-icon').attributes as NamedNodeMap;
    expect(nodeAttributes.getNamedItem('svgIcon').value).toBe('mine');
  });

  it('should be flagged -> FreeTile', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new FreeTile(1, 1);
    component.tile.isRevealed = false;
    component.tile.isFlagged = true;
    component.globalParams = {isSuperman : false};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const nodeAttributes = compiled.querySelector('md-icon').attributes as NamedNodeMap;
    expect(nodeAttributes.getNamedItem('svgIcon').value).toBe('flag');
  });

  it('should be flagged -> FreeTile with superman mode', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new FreeTile(1, 1);
    component.tile.isRevealed = false;
    component.tile.isFlagged = true;
    component.globalParams = {isSuperman : true};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const nodeAttributes = compiled.querySelector('md-icon').attributes as NamedNodeMap;
    expect(nodeAttributes.getNamedItem('svgIcon').value).toBe('flag');
  });

  it('should be flagged -> Mine', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new Mine(1);
    component.tile.isRevealed = false;
    component.tile.isFlagged = true;
    component.globalParams = {isSuperman : false};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const nodeAttributes = compiled.querySelector('md-icon').attributes as NamedNodeMap;
    expect(nodeAttributes.getNamedItem('svgIcon').value).toBe('flag');
  });

  it('should be flagged -> Mine with superman mode', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new Mine(1);
    component.tile.isRevealed = false;
    component.tile.isFlagged = true;
    component.globalParams = {isSuperman : true};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const nodeAttributes = compiled.querySelector('md-icon').attributes as NamedNodeMap;
    expect(nodeAttributes.getNamedItem('svgIcon').value).toBe('mine');
  });

  // Shouldn't happen
  it('should not be flagged -> revealed FreeTile', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new FreeTile(1, 1);
    component.tile.isRevealed = true;
    component.tile.isFlagged = true;
    component.globalParams = {isSuperman : false};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.tile').textContent).toContain('1');
  });

  it('should be flagged and mined -> flagged, not revealed mine, superman mode', () => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tile = new Mine(1);
    component.tile.isRevealed = false;
    component.tile.isFlagged = true;
    component.globalParams = {isSuperman : true};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const nodeAttributes = compiled.querySelector('.tile.flagged-tile.superman-tile md-icon').attributes as NamedNodeMap;
    expect(nodeAttributes.getNamedItem('svgIcon').value).toBe('mine');
  });
});
