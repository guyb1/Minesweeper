import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import { ConfigComponent } from './config.component';
import {MdDialogModule, MdInputModule, MdCheckboxModule, MdDialogRef, MD_DIALOG_DATA} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {Game} from "../minesweeper/game";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {By} from "@angular/platform-browser";

class MockClass{
}

describe('ConfigComponent', () => {
  let component: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MdDialogModule, MdInputModule, FormsModule, MdCheckboxModule, BrowserAnimationsModule],
      declarations: [ ConfigComponent ],
      providers: [
        { provide: MdDialogRef, useClass: MockClass },
        {provide: MD_DIALOG_DATA, useClass: MockClass}
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([MdDialogRef], (dialogRef: MockClass) => {
    fixture = TestBed.createComponent(ConfigComponent);
    component = fixture.componentInstance;
  }));

  it('should be created', () => {
    component.data = new MockClass();
    component.game = new Game(1, 1, 1, false);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('invalid width input', () => {
    component.data = new MockClass();
    component.game = new Game(0, 1, 1, false);
    fixture.detectChanges();

    var widthWarn = fixture.debugElement.queryAll(By.css('.validation-message.width-prop')).length;
    var heightWarn = fixture.debugElement.queryAll(By.css('.validation-message.height-prop')).length;
    var mineWarn = fixture.debugElement.queryAll(By.css('.validation-message.mine-prop')).length;

    expect(widthWarn).toBe(1);
    expect(heightWarn).toBe(0);
    expect(mineWarn).toBe(0);
  });

  it('invalid width input', () => {
    component.data = new MockClass();
    component.game = new Game(301, 1, 1, false);
    fixture.detectChanges();

    var widthWarn = fixture.debugElement.queryAll(By.css('.validation-message.width-prop')).length;
    var heightWarn = fixture.debugElement.queryAll(By.css('.validation-message.height-prop')).length;
    var mineWarn = fixture.debugElement.queryAll(By.css('.validation-message.mine-prop')).length;

    expect(widthWarn).toBe(1);
    expect(heightWarn).toBe(0);
    expect(mineWarn).toBe(0);
  });

  it('invalid height input', () => {
    component.data = new MockClass();
    component.game = new Game(1, 0, 1, false);
    fixture.detectChanges();

    var widthWarn = fixture.debugElement.queryAll(By.css('.validation-message.width-prop')).length;
    var heightWarn = fixture.debugElement.queryAll(By.css('.validation-message.height-prop')).length;
    var mineWarn = fixture.debugElement.queryAll(By.css('.validation-message.mine-prop')).length;

    expect(widthWarn).toBe(0);
    expect(heightWarn).toBe(1);
    expect(mineWarn).toBe(0);
  });

  it('invalid height input', () => {
    component.data = new MockClass();
    component.game = new Game(1, 301, 1, false);
    fixture.detectChanges();

    var widthWarn = fixture.debugElement.queryAll(By.css('.validation-message.width-prop')).length;
    var heightWarn = fixture.debugElement.queryAll(By.css('.validation-message.height-prop')).length;
    var mineWarn = fixture.debugElement.queryAll(By.css('.validation-message.mine-prop')).length;

    expect(widthWarn).toBe(0);
    expect(heightWarn).toBe(1);
    expect(mineWarn).toBe(0);
  });

  it('invalid mine input', () => {
    component.data = new MockClass();
    component.game = new Game(1, 1, 0, false);
    fixture.detectChanges();

    var widthWarn = fixture.debugElement.queryAll(By.css('.validation-message.width-prop')).length;
    var heightWarn = fixture.debugElement.queryAll(By.css('.validation-message.height-prop')).length;
    var mineWarn = fixture.debugElement.queryAll(By.css('.validation-message.mine-prop')).length;

    expect(widthWarn).toBe(0);
    expect(heightWarn).toBe(0);
    expect(mineWarn).toBe(1);
  });

  it('invalid mine input', () => {
    component.data = new MockClass();
    component.game = new Game(1, 1, 2, false);
    fixture.detectChanges();

    var widthWarn = fixture.debugElement.queryAll(By.css('.validation-message.width-prop')).length;
    var heightWarn = fixture.debugElement.queryAll(By.css('.validation-message.height-prop')).length;
    var mineWarn = fixture.debugElement.queryAll(By.css('.validation-message.mine-prop')).length;

    expect(widthWarn).toBe(0);
    expect(heightWarn).toBe(0);
    expect(mineWarn).toBe(1);
  });

  it('invalid width, height and mine input', () => {
    component.data = new MockClass();
    component.game = new Game(0, 0, 1, false);
    fixture.detectChanges();

    var widthWarn = fixture.debugElement.queryAll(By.css('.validation-message.width-prop')).length;
    var heightWarn = fixture.debugElement.queryAll(By.css('.validation-message.height-prop')).length;
    var mineWarn = fixture.debugElement.queryAll(By.css('.validation-message.mine-prop')).length;

    expect(widthWarn).toBe(1);
    expect(heightWarn).toBe(1);
    expect(mineWarn).toBe(0);
  });

  it('valid inputs', () => {
    component.data = new MockClass();
    component.game = new Game(20, 20, 20, false);
    fixture.detectChanges();

    var widthWarn = fixture.debugElement.queryAll(By.css('.validation-message.width-prop')).length;
    var heightWarn = fixture.debugElement.queryAll(By.css('.validation-message.height-prop')).length;
    var mineWarn = fixture.debugElement.queryAll(By.css('.validation-message.mine-prop')).length;

    expect(widthWarn).toBe(0);
    expect(heightWarn).toBe(0);
    expect(mineWarn).toBe(0);
  });

  it('valid inputs', () => {
    component.data = new MockClass();
    component.game = new Game(1, 1, 1, false);
    fixture.detectChanges();

    var widthWarn = fixture.debugElement.queryAll(By.css('.validation-message.width-prop')).length;
    var heightWarn = fixture.debugElement.queryAll(By.css('.validation-message.height-prop')).length;
    var mineWarn = fixture.debugElement.queryAll(By.css('.validation-message.mine-prop')).length;

    expect(widthWarn).toBe(0);
    expect(heightWarn).toBe(0);
    expect(mineWarn).toBe(0);
  });

  it('valid inputs', () => {
    component.data = new MockClass();
    component.game = new Game(300, 300, 20, false);
    fixture.detectChanges();

    var widthWarn = fixture.debugElement.queryAll(By.css('.validation-message.width-prop')).length;
    var heightWarn = fixture.debugElement.queryAll(By.css('.validation-message.height-prop')).length;
    var mineWarn = fixture.debugElement.queryAll(By.css('.validation-message.mine-prop')).length;

    expect(widthWarn).toBe(0);
    expect(heightWarn).toBe(0);
    expect(mineWarn).toBe(0);
  });
});
