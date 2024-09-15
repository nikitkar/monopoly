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

  // initializing a players
  setPlayer(players: Player[]): this {
    this.players = players;

    return this;
  }

  // the beginning of the game (who goes first)
  startGame(): this {
    console.log("игра началась\n");

    this.players[this.currentPlayerIndex].isTurn = true;

    console.log(`ходит ${this.players[this.currentPlayerIndex].idUser.name}\n`);

    return this;
  }

  // passes the move to the next player
  moveToNextTurn(): this {
    console.log(
      `конец хода игрока ${this.players[this.currentPlayerIndex].idUser.name}\n`
    );
    this.players[this.currentPlayerIndex].endTurn();
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length; // we get the number of the next player

    console.log(
      `следующий ход игрока ${
        this.players[this.currentPlayerIndex].idUser.name
      }\n`
    );

    const currentPlayer = this.players[this.currentPlayerIndex];

    // checking for a skip move
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
