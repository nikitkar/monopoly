export class Dice {
  private dice1: number = 0;
  private dice2: number = 0;

  private static instance: Dice; // паттерн единства

  private constructor() {}

  static getInstance(): Dice {
    if (!Dice.instance) Dice.instance = new Dice();

    return Dice.instance;
  }

  // бросить кубик (получаем значение, на которое пользователь должен переместиться)
  roll(): number[] {
    this.dice1 = Math.floor(Math.random() * (7 - 1) + 1);
    this.dice2 = Math.floor(Math.random() * (7 - 1) + 1);

    console.log(`Кости брошены... \nВыпало ${this.dice1}:${this.dice2}`);

    return [this.dice1, this.dice2];
  }
}
