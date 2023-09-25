import Image from "next/image";

interface IPlayedCard {
  img: string;
  name: string;
  money: number;
  color: string;
}

const PlayedCard: React.FC<IPlayedCard> = ({ name, img, color, money }) => {
  return (
    <div className="asidePlayer-card">
      <div className="asidePlayer-card__body">
        <div className="asidePlayer-card__body-avatar">
          {/* <Image src={img} width={45} height={45} alt="avatar user" /> */}
        </div>
        <div className="asidePlayer-card__body-nick">
          <p className="asidePlayer-card__body-nick_nick">{name}</p>
        </div>
        <div className="asidePlayer-card__body-money">
          <span className="asidePlayer-card__body-money_money">{money}</span>
        </div>
        <div className="asidePlayer-card__body-timer">90</div>
      </div>
      <div className="asidePlayer-card__menu"></div>
      {/* выпадающее меня для пользователя (профоиль, заблокировать, договор) */}
    </div>
  );
};

export default PlayedCard;
