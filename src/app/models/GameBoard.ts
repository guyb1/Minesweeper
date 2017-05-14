import {Mine} from "./Mine";
import {FreeTile} from "./FreeTile";
import {Tile} from "./Tile";
import {Directions} from "./Directions";
import {Position} from "./Position";
/**
 * Created by Guy on 5/14/2017.
 */
export class GameBoard{
  readonly Directions = [Directions.ne, Directions.n, Directions.nw, Directions.e, Directions.w, Directions.se, Directions.s, Directions.sw];
  board: any;
  width: number;
  height: number;
  mines: number;

  constructor(width: number, height: number, mines: number){
    this.width = width;
    this.height = height;
    this.mines = mines;
    this.board = this.initBoard(width, height, mines);
  }

  getRows(){
    return this.board;
  }

  public getNumOfMinesAround(tile:Tile){
    return this.getNeighbors(tile).filter(element => element instanceof Mine).length;
  }

  public getNeighbors(tile:Tile){
    return this.Directions.map(direction => this.getNeighbor(tile, direction)).filter(element => element);
  }

  private hasNorth(pos: Position){
    return pos.y > 0;
  }

  private hasEast(pos: Position){
    return pos.x < this.width - 1;
  }

  private hasWest(pos: Position){
    return pos.x > 0;
  }

  private hasSouth(pos: Position){
    return pos.y < this.height - 1;
  }

  private getNeighbor(tile: Tile, dir:Directions){
    var pos: Position = this.getPositionById(tile.id);

    switch (dir){
      case Directions.ne:{
        if(this.hasNorth(pos) && this.hasEast(pos)){
          return this.board[pos.y - 1][pos.x + 1];
        }

        break;
      }
      case Directions.n:{
        if(this.hasNorth(pos)){
          return this.board[pos.y - 1][pos.x];
        }

        break;
      }
      case Directions.nw:{
        if(this.hasNorth(pos) && this.hasWest(pos)){
          return this.board[pos.y - 1][pos.x - 1];
        }

        break;
      }
      case Directions.e:{
        if(this.hasEast(pos)){
          return this.board[pos.y][pos.x + 1];
        }

        break;
      }
      case Directions.w:{
        if(this.hasWest(pos)){
          return this.board[pos.y][pos.x - 1];
        }

        break;
      }
      case Directions.se:{
        if(this.hasSouth(pos) && this.hasEast(pos)){
          return this.board[pos.y + 1][pos.x + 1];
        }

        break;
      }
      case Directions.s:{
        if(this.hasSouth(pos)){
          return this.board[pos.y + 1][pos.x];
        }

        break;
      }
      case Directions.sw:{
        if(this.hasSouth(pos) && this.hasWest(pos)){
          return this.board[pos.y + 1][pos.x - 1];
        }

        break;
      }
      default:
        return null;
    }

    return null;
  }

  private initBoard(width:number, height:number, mines:number){
    var board = [];
    var ids = [];

    for(var i = 0; i < height; i++){
      board.push([]);

      for(var j = 0; j < width; j++){
        var id = i * width + j;
        board[i].push(new FreeTile(id, 0));
        ids.push(id);
      }
    }

    for(var counter = 0; counter < mines; counter++){
      var idx = Math.floor(Math.random() * ids.length);
      var pos:Position = this.getPositionById(ids[idx]);

      board[pos.y][pos.x] = new Mine(ids[idx]);
      ids.splice(idx, 1);
    }

    return board;
  }

  private getPositionById(id: number) : Position{
    return new Position(id % this.width, Math.floor(id / this.width));
  }
}