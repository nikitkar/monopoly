import Head from "next/head";

import { useState } from "react";

import { Player } from "@/utils/classes/player.class";
import { User } from "@/utils/classes/user.class";
import { Dice } from "@/utils/classes/dice.class";

const user1 = new User(1, "Никита", "красный", "img.png");
const user2 = new User(2, "Андрей", "синий", "img.png");
const user3 = new User(3, "Егор", "зеленый", "img.png");
const user4 = new User(4, "Илья", "желтый", "img.png");

const dice = new Dice().roll();

export default function Home() {
  const [diceR, setDiceR] = useState<number[]>([]);
  const [player, setPlayer] = useState(new Player(user1));

  const handleRollDice = () => {
    player.setFieldNumber(dice);

    setDiceR(dice);
    setPlayer(player);
  };

  return (
    <>
      <Head>
        <title>Monopoly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <p>
          {diceR[0]} + {diceR[1]}= {diceR[0] + diceR[1]}
        </p>
        <div>
          <button onClick={handleRollDice}>след ход</button>
        </div>
      </main>
    </>
  );
}
