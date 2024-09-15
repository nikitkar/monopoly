import { TurnManager } from "./TurnManager.class";
import { User } from "./User.class";

export class Player {
  idUser: User;

  totalMoney: number;
  fieldNumber: number; // which field number is located on
  moveSkipping: boolean; // is he missing a move?

  defeat: boolean;
  isTurn: boolean; // is the player's current move?
  skipNextTurn: boolean; // does the next move skip

  constructor(idUser: User) {
    this.idUser = idUser;

    this.totalMoney = 15000;
    this.fieldNumber = 0;
    this.moveSkipping = false;
    this.defeat = false;
    this.isTurn = false;
    this.skipNextTurn = false;
  }

  // working with the player's money. Subtraction, plus depending on the field
  setMoney(amount: number, operator: string = "-"): this {
    this.totalMoney =
      operator === "-" ? this.totalMoney - amount : this.totalMoney + amount;

    if (this.totalMoney < 0) {
      this.totalMoney = 0;
      this.defeat = true;
    }

    return this;
  }

  // setting the field on which the game should be played (a die is thrown, and it is calculated which field the player hits)
  setFieldNumber(amountMove: number[]): this {
    this.fieldNumber += amountMove.reduce((acc, num) => acc + num, 0);

    if (this.fieldNumber > 40) this.fieldNumber -= 40;

    return this;
  }

  // end of the turn
  endTurn(): this {
    this.isTurn = false;

    return this;
  }

  // skipping a move
  skipTurn(): this {
    this.skipNextTurn = true;
    this.endTurn();

    // move to the next player
    TurnManager.getInstance().moveToNextTurn();

    return this;
  }

  //changing the value of skipping the next move
  resetSkipNextTurn(): this {
    this.skipNextTurn = false;

    return this;
  }
}
