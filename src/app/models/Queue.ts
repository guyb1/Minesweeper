/**
 * Created by Guy on 5/14/2017.
 */

export class Queue<T> {
  _store: T[] = [];
  push(val: T) {
    this._store.push(val);
  }
  pop(): T | undefined {
    return this._store.shift();
  }

  isEmpty(): boolean {
    return !Boolean(this._store && this._store.length);
  }
}
