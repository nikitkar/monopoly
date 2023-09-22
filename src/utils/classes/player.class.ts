import { TurnManager } from "./TurnManager.class";
import { User } from "./User.class";

export class Player {
  idUser: User;

  totalMoney: number; // всего денег
  fieldNumber: number; // на каком номере поля находится
  moveSkipping: boolean; // пропускает ли ход?

  defeat: boolean;
  isTurn: boolean; // текущий ли ход игрока?
  skipNextTurn: boolean; // пропускает ли следующий ход

  constructor(idUser: User) {
    this.idUser = idUser;

    this.totalMoney = 15000;
    this.fieldNumber = 0;
    this.moveSkipping = false;
    this.defeat = false;
    this.isTurn = false;
    this.skipNextTurn = false;
  }

  // работа с деньгами игрока. Отнимание, плюсовать в зависимости от поля
  setMoney(amount: number, operator: string = "-"): this {
    this.totalMoney =
      operator === "-" ? this.totalMoney - amount : this.totalMoney + amount;

    if (this.totalMoney < 0) {
      this.totalMoney = 0;
      this.defeat = true;
    }

    return this;
  }

  // установка поля, на котором должен быть игрой (бросается кубик, и подсчитывается, на какое поля игрок попадает)
  setFieldNumber(amountMove: number[]): this {
    this.fieldNumber += amountMove.reduce((acc, num) => acc + num, 0);

    if (this.fieldNumber > 40) this.fieldNumber -= 40;

    return this;
  }

  // конец хода
  endTurn(): this {
    this.isTurn = false;

    return this;
  }

  // пропуск хода
  skipTurn(): this {
    this.skipNextTurn = true;
    this.endTurn();

    // переход хода следующему игроку
    TurnManager.getInstance().moveToNextTurn();

    return this;
  }

  // изменение значения пропуска следующего хода
  resetSkipNextTurn(): this {
    this.skipNextTurn = false;

    return this;
  }
}
