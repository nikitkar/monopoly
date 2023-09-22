import Head from "next/head";

import { useState, useEffect } from "react";

import { Player } from "@/utils/classes/Player.class";
import { User } from "@/utils/classes/User.class";
import { Dice } from "@/utils/classes/Dice.class";
import { TurnManager } from "@/utils/classes/TurnManager.class";

const user1 = new User(1, "Никита", "красный", "img.png");
const user2 = new User(2, "Андрей", "синий", "img.png");
const user3 = new User(3, "Егор", "зеленый", "img.png");
const user4 = new User(4, "Илья", "желтый", "img.png");

const player1 = new Player(user1);
const player2 = new Player(user2);
const player3 = new Player(user3);
const player4 = new Player(user4);

const dice = Dice.getInstance();

const turnManager = TurnManager.getInstance().setPlayer([
  player1,
  player2,
  player3,
  player4,
]);

export default function Home() {
  const [diceR, setDiceR] = useState<number[]>([]);
  const [player, setPlayer] = useState(new Player(user1));

  useEffect(() => {
    turnManager.startGame();
    player.setFieldNumber(dice.roll());
  }, []);

  const handleRollDice = () => {
    turnManager.moveToNextTurn();

    const diceRoll = dice.roll();
    setDiceR(diceRoll);
    player.setFieldNumber(diceRoll);

    setPlayer(player);
  };

  return (
    <>
      <Head>
        <title>Monopoly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {/* <p>
          {diceR[0]} + {diceR[1]}= {diceR[0] + diceR[1]}
        </p>
        <div>
          <button onClick={handleRollDice}>след ход</button>
        </div> */}
        <section className="playingField">
          <div className="container">
            <div className="playingField-wrapper">
              <aside className="asidePlayer">
                <div className="asidePlayer-list">
                  <div className="asidePlayer-card">
                    <div className="asidePlayer-card__body">
                      <div className="asidePlayer-card__body-avatar"></div>
                      <div className="asidePlayer-card__body-nik"></div>
                      <div className="asidePlayer-card__body-money"></div>
                      <div className="asidePlayer-card__body-timer"></div>
                    </div>
                    <div className="asidePlayer-card__menu"></div>{" "}
                    {/* выпадающее меня для пользователя (профоиль, заблокировать, договор) */}
                  </div>
                </div>
              </aside>
              <section className="board">
                <div className="board-field"></div>
                <div className="board-center"></div>
                <div className="board-tokens"></div>
                <div className="board-dice"></div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
