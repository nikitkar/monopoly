export class Dice {
  private dice1: number = 0;
  private dice2: number = 0;

  private static instance: Dice; // a single instance

  private constructor() {}

  static getInstance(): Dice {
    if (!Dice.instance) Dice.instance = new Dice();

    return Dice.instance;
  }

  // roll the dice (we get the value that the user should move to)
  roll(): number[] {
    this.dice1 = Math.floor(Math.random() * (7 - 1) + 1);
    this.dice2 = Math.floor(Math.random() * (7 - 1) + 1);

    console.log(`Кости брошены... \nВыпало ${this.dice1}:${this.dice2}`);

    return [this.dice1, this.dice2];
  }

  sumDice(): number {
    return this.dice1 + this.dice2;
  }
}
