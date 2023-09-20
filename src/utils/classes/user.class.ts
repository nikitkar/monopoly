export class User {
  readonly id: number;
  readonly name: string; // имя игрока
  readonly color: string; // цвет игрока
  readonly img: string; // аватарка

  totalMoney: number; // всего денег
  fieldNumber: number; // на каком номере поля находится
  moveSkipping: boolean; // пропускает ли ход?

  defeat: boolean;

  constructor(id: number, name: string, color: string, img: string) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.img = img;

    this.totalMoney = 15000;
    this.fieldNumber = 0;
    this.moveSkipping = false;
    this.defeat = false;
  }

  setMoney(amount: number, operator: string = "-"): number {
    this.totalMoney =
      operator === "-" ? this.totalMoney - amount : this.totalMoney + amount;

    if (this.totalMoney < 0) {
      this.totalMoney = 0;
      this.defeat = true;
    }

    return this.totalMoney;
  }

  setFieldNumber(amountMove: number[]): void {
    this.fieldNumber += amountMove.reduce((acc, num) => acc + num, 0);

    if (this.fieldNumber > 40) this.fieldNumber -= 40;

    console.log(this.fieldNumber);
  }

  getInfo(): string {
    return `id - ${this.id}, totalMoney - ${this.totalMoney}, defeat - ${this.defeat}, filedNum - ${this.fieldNumber}`;
  }
}
