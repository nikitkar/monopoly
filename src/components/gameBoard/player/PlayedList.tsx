import React from "react";

import { TurnManager } from "@/utils/classes/TurnManager.class";

import { Player } from "@/utils/classes/Player.class";
import { User } from "@/utils/classes/User.class";

import userJson from "@/data/users/user.json";

import PlayedCard from "./PlayedCard";

const players = userJson.players;

const TurnManagerInstance = TurnManager.getInstance();

const PlayedList: React.FC = () => {
  return (
    <>
      {TurnManagerInstance.players.map((item, index) => (
        <PlayedCard
          name={item.idUser.name}
          color={item.idUser.color}
          img={item.idUser.img}
          money={
            players[index].idUser === item.idUser.id
              ? players[index].totalMoney
              : 0
          }
          indexUnic={index}
          key={index}
        />
      ))}
    </>
  );
};

export default PlayedList;
