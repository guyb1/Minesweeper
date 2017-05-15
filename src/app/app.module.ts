import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TileComponent } from './components/tile/tile.component';
import { RowComponent } from './components/row/row.component';
import { MinesweeperComponent } from './components/minesweeper/minesweeper.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdIconModule, MdDialogModule, MdInputModule, MdListModule,
  MdCheckboxModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    RowComponent,
    MinesweeperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MdDialogModule,
    MdInputModule,
    MdListModule,
    MdCheckboxModule
  ],
  providers: [],
  entryComponents: [MinesweeperComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
