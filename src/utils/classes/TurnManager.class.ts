import { Player } from "./Player.class";

export class TurnManager {
  players: Player[];
  currentPlayerIndex: number;

  private static instance: TurnManager;

  private constructor(players: Player[]) {
    this.players = players;
    this.currentPlayerIndex = 0;
  }

  static getInstance(): TurnManager {
    if (!TurnManager.instance) TurnManager.instance = new TurnManager([]);

    return TurnManager.instance;
  }

  // инциализируем игроков
  setPlayer(players: Player[]): this {
    this.players = players;

    return this;
  }

  // начало игры (кто ходит первый)
  startGame(): this {
    console.log("игра началась\n");

    this.players[this.currentPlayerIndex].isTurn = true;

    console.log(`ходит ${this.players[this.currentPlayerIndex].idUser.name}\n`);

    return this;
  }

  // передает ход следующему игроку
  moveToNextTurn(): this {
    console.log(
      `конец хода игрока ${this.players[this.currentPlayerIndex].idUser.name}\n`
    );
    this.players[this.currentPlayerIndex].endTurn();
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length; // получаем номер следующего игрока

    console.log(
      `следующий ход игрока ${
        this.players[this.currentPlayerIndex].idUser.name
      }\n`
    );

    const currentPlayer = this.players[this.currentPlayerIndex];

    // проверка на скип хода
    if (currentPlayer.skipNextTurn) {
      console.log(
        `игрок ${
          this.players[this.currentPlayerIndex].idUser.name
        } пропускает свой ход\n`
      );

      currentPlayer.resetSkipNextTurn();
      this.moveToNextTurn();
    } else currentPlayer.isTurn = true;

    return this;
  }
}
