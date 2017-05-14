import {Tile} from "./Tile";
/**
 * Created by Guy on 5/12/2017.
 */

export class FreeTile extends Tile{
  public minesAround: number;

  constructor(id: number, minesAround: number){
    super(id);
    this.minesAround = minesAround;
  }

  public value(): string {
    return String(this.minesAround);
  }
}
