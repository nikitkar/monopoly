import Head from "next/head";

import { useState, useEffect } from "react";

import { Player } from "@/utils/classes/Player.class";
import { User } from "@/utils/classes/User.class";
import { Dice } from "@/utils/classes/Dice.class";
import { TurnManager } from "@/utils/classes/TurnManager.class";

import PlayedList from "@/components/gameBoard/player/PlayedList";

import userJson from "@/data/users/user.json";
const users = userJson.users;

const createUsersAndPlayers = (users: any[]) => {
  return users.map((user) => {
    const userInstance = new User(user.id, user.name, user.color, user.img);
    return new Player(userInstance);
  });
};

const players = createUsersAndPlayers(users);
const dice = Dice.getInstance();
const turnManager = TurnManager.getInstance().setPlayer(players);

export default function Home() {
  const [diceR, setDiceR] = useState<number[]>([]);
  const [diceSumR, setDiceSumR] = useState<number>();

  useEffect(() => {
    turnManager.startGame();
    // player.setFieldNumber(dice.roll());
  }, []);

  const handleRollDice = () => {
    turnManager.moveToNextTurn();

    const diceRoll = dice.roll();
    const diceSumRoll = dice.sumDice();

    setDiceR(diceRoll);
    setDiceSumR(diceSumRoll);
  };

  return (
    <>
      <Head>
        <title>Monopoly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="main">
        <p>
          {diceR[0]} + {diceR[1]}= {diceSumR}
        </p>
        <div>
          <button onClick={handleRollDice}>след ход</button>
        </div>
        <section className="playingArea">
          <div className="container">
            <div className="playingArea-wrapper">
              <aside className="asidePlayer">
                <div className="asidePlayer-list">
                  <PlayedList />
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
