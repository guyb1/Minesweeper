/**
 * Created by Guy on 5/12/2017.
 */
import {GameBoard} from "./game-board";
import {Tile} from "../tile/tile";
import {Mine} from "../tile/mine";
import {FreeTile} from "../tile/free-tile";
import {Queue} from "../../utils/Queue";

export class Game{
  isSuperman: boolean;
  isGameOver: boolean;
  width: number;
  height: number;
  mines: number;
  flags: number;
  minesRevealed: number;
  board: GameBoard;

  constructor(width: number, height: number, mines: number, superman: boolean){
    this.width = width;
    this.height = height;
    this. mines = mines;
    this.isSuperman = superman;
    this.board = null;
  }

  //#region public methods
  public start() {
    this.isGameOver = false;
    this.minesRevealed = 0;
    this.flags = this.mines;

    // Initialize board and mines
    this.board = new GameBoard(this.width, this.height, this.mines);
  }

  public stop(){
    this.isGameOver = true;
    this.board = null;
  }

  // Returns if game is over
  public chooseTile(tile: Tile): boolean {
    // Checks that the game is still on or the tile is not flagged
    if(this.isGameOver || tile.isFlagged)
      return;

    // If its mine - game over.
    if(tile instanceof Mine){
      this.isGameOver = true;
      tile.isRevealed = true;

      return true;
    }

    // Reveal tile and others if needed.
    this.revealAdjacentTiles(tile);

    return false;
  }

  // Returns if won
  public flagTile(tile: Tile): boolean {
    if(this.isGameOver)
      return false;

    if(tile.isRevealed)
      return false;

    // Checks if we should flag the tile
    if(tile.isFlagged){
      tile.isFlagged = false;
      this.flags++;

      // In case the user un-flag a mine
      if(tile instanceof Mine) {
        this.minesRevealed --;
      }
    } else {
      // Checks we have enough flags left
      if(this.flags <= 0){
        alert("No flags");
      } else {
        tile.isFlagged = true;
        this.flags--;

        // In case the user flag a mine
        if(tile instanceof Mine){
          this.minesRevealed++;

          // Checks if this is the last mine
          if(this.minesRevealed == this.mines){
            this.isGameOver = true;
            return true;
          }
        }
      }
    }

    return false;
  }

  //#endregion

  //#region private methods
  private revealAdjacentTiles(tile: Tile) {
    // If its not FreeTile, there is nothing to reveal
    if(!(tile instanceof FreeTile))
      return;

    // If its flagged, the user probably didnt want to click it...
    if(tile.isFlagged)
      return;

    var queue: Queue<FreeTile> = new Queue<FreeTile>();
    queue.push(tile);

    // Avoiding recursive calls, call stack might crash in case of LARGE boards..
    while(!queue.isEmpty()){
      var currTile: FreeTile = queue.pop();

      // We added only tiles which are not mines, not revealed and not flagged.
      // However, we should check that the tile hasn't been revealed yet again to avoid double work.
      if(!currTile.isRevealed && !tile.isFlagged) {
        this.revealFreeTile(currTile);

        // Add to the queue only neighbors of empty tile
        if(!currTile.minesAround) {
          this.board.getNeighbors(currTile).forEach(tile => {
            // We should add to the queue only tiles which are not mines, not revealed and not flagged.
            if (!(tile instanceof Mine) && !tile.isRevealed && !tile.isFlagged)
              queue.push(tile);
          });
        }
      }
    }
  }

  private revealFreeTile(tile: FreeTile){
    tile.minesAround = this.board.getNumOfMinesAround(tile);
    tile.isRevealed = true;
  }

  //#endregion
}
