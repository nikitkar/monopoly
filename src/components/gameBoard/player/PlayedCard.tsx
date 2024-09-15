import Image from "next/image";

import { TurnManager } from "@/utils/classes/TurnManager.class";

const TurnManagerInstance = TurnManager.getInstance();

const PlayedCard: React.FC<IPlayedCard> = ({
  name,
  img,
  color,
  money,
  indexUnic,
}) => {
  const formatNumberWithCommas = (money: number): string =>
    money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//   console.log(TurnManagerInstance.currentPlayerIndex);

  return (
    <div
      className={
        indexUnic === TurnManagerInstance.currentPlayerIndex
          ? "asidePlayer-card active"
          : "asidePlayer-card"
      }
      style={
        indexUnic === TurnManagerInstance.currentPlayerIndex
          ? { backgroundColor: color }
          : {}
      }
    >
      <div className="asidePlayer-card__body">
        <div
          className="asidePlayer-card__body-avatar"
          style={{ backgroundColor: color }}
        >
          <Image
            className="asidePlayer-card__body-avatar-img"
            src={img}
            width={45}
            height={45}
            priority
            alt="avatar user"
          />
        </div>
        <div className="asidePlayer-card__body-nick">
          <p className="asidePlayer-card__body-nick_nick">{name}</p>
        </div>
        <div className="asidePlayer-card__body-money">
          <span className="asidePlayer-card__body-money_money">
            {formatNumberWithCommas(money)}
          </span>
        </div>
        {indexUnic === TurnManagerInstance.currentPlayerIndex ? (
          <div className="asidePlayer-card__body-timer">90</div>
        ) : (
          <></>
        )}
      </div>
      <div className="asidePlayer-card__menu"></div>
      {/* выпадающее меня для пользователя (профиль, заблокировать, договор) */}
    </div>
  );
};

export default PlayedCard;
