import React from "react";

import { Player } from "@/utils/classes/Player.class";
import { User } from "@/utils/classes/User.class";

import userJson from "@/data/users/user.json";

import PlayedCard from "./PlayedCard";

const users = userJson.users;
const players = userJson.players;

const PlayedList: React.FC = () => {
  return (
    <>
      {users.map((item, index) => (
        <PlayedCard
          name={item.name}
          color={item.color}
          img={item.img}
          money={
            players[index].idUser === item.id ? players[index].totalMoney : 0
          }
          key={index}
        />
      ))}
    </>
  );
};

export default PlayedList;
