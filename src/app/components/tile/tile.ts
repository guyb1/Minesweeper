/**
 * Created by Guy on 5/12/2017.
 */
import {ITile} from "./itile";

export abstract class Tile implements ITile{
  id: number;
  isRevealed: boolean;
  isFlagged: boolean;

  constructor(id: number){
    this.id = id;
    this.isRevealed = false;
    this.isFlagged = false;
  }

  public abstract value(): string;
}
