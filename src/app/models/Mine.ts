import {Tile} from "./Tile";
/**
 * Created by Guy on 5/12/2017.
 */

export class Mine extends Tile{
  constructor(id: number){
    super(id);
  }

  public value(): string {
    return "*";
  }
}
