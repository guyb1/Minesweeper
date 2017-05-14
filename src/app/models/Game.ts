import {GameBoard} from "./GameBoard";
import {Tile} from "./Tile";
import {Mine} from "./Mine";
import {FreeTile} from "./FreeTile";
import {Queue} from "./Queue";
/**
 * Created by Guy on 5/12/2017.
 */
export class Game{
  private isGameOver: boolean;
  width: number;
  height: number;
  mines: number;
  flags: number;
  minesRevealed: number;
  board: GameBoard;

  constructor(width: number, height: number, mines: number){
    this.width = width;
    this.height = height;
    this. mines = mines;
    this.flags = mines;
    this.isGameOver = false;
    this.minesRevealed = 0;
    this.board = null;
  }

  public start() {
    this.board = new GameBoard(this.width, this.height, this.mines);
  }

  public chooseTile(tile: Tile){
    // Checks that the game is still on or the tile is not flagged
    if(this.isGameOver || tile.isFlagged)
      return;

    if(tile instanceof Mine){
      this.isGameOver = true;
      tile.isRevealed = true;
      alert('Game Over');
    }

    this.revealAdjacentTiles(tile);
  }

  public flagTile(tile: Tile) {
    if(this.isGameOver)
      return;

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
            alert("You win!");
          }
        }
      }
    }
  }

  // public revealAdjacentTiles(tile: Tile) {
  //   if(!(tile instanceof FreeTile))
  //     return;
  //
  //   if(tile.isFlagged)
  //     return;
  //
  //   var freeTile: FreeTile = tile as FreeTile;
  //   this.revealFreeTile(freeTile);
  //
  //   if(freeTile.minesAround == 0){
  //     this.board.getNeighbors(freeTile).forEach(tile => {
  //       if (!tile.isRevealed)
  //         this.revealAdjacentTiles(tile);
  //     });
  //   }
  // }

  public revealAdjacentTiles(tile: Tile) {
    if(!(tile instanceof FreeTile))
      return;

    if(tile.isFlagged)
      return;

    var queue: Queue<FreeTile> = new Queue<FreeTile>();
    queue.push(tile);

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

  public revealFreeTile(tile: FreeTile){
    tile.minesAround = this.board.getNumOfMinesAround(tile);
    tile.isRevealed = true;
  }







  // public initialize(){
  //   this.board = [];
  //   var positions = [];
  //
  //   for(var i = 0; i < this.height; i++){
  //     this.board.push([]);
  //
  //     for(var j = 0; j < this.width; j++){
  //       var id = i * this.width + j;
  //       this.board[i].push(new FreeTile(id, 0));
  //       positions.push(id);
  //     }
  //   }
  //
  //   for(var counter = 0; counter < this.mines; counter++){
  //     var idx = Math.floor(Math.random() * positions.length);
  //     var j = positions[idx] % this.width;
  //     var i = Math.floor(positions[idx] / this.width);
  //
  //     this.board[i][j] = new Mine(positions[idx]);
  //     positions.splice(idx, 1);
  //   }
  // }
}
