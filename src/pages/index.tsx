import Head from "next/head";

import { useState } from "react";

import { User } from "@/utils/classes/user.class";
import { Dice } from "@/utils/classes/dice.class";

export default function Home() {
  const dice = new Dice().roll();

  const [diceR, setDiceR] = useState<number[]>([]);
  const [user, setUser] = useState(new User(1, "John", "blue", "avatar.jpg"));
  const [info, setInfo] = useState("");

  const handleRollDice = () => {
    user.setFieldNumber(dice);

    setDiceR(dice);
    setUser(user);
    setInfo(user.getInfo());
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
          <p>{info}</p>
        </div>
      </main>
    </>
  );
}
