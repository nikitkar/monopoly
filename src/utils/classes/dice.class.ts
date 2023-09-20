export class Dice {
  dice1: number = 0;
  dice2: number = 0;

  constructor() {}

  roll(): number[] {
    this.dice1 = Math.floor(Math.random() * (7 - 1) + 1);
    this.dice2 = Math.floor(Math.random() * (7 - 1) + 1);

    return [this.dice1, this.dice2];
  }
}
