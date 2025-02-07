import { Button } from "../Button/Button";
import "./card.scss";

type CardProp = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
};

export const Card = ({
  id,
  title,
  description,
  date,
  time,
  photo,
  setIsOpenModal,
  setId,
}: CardProp) => {
  return (
    <div className="card">
      <img src={photo} className="card__img" alt="#" />
      <div className="card__body">
        <h5 className="card__title">{title}</h5>
        <p className="card__text">{description}</p>
        <div className="card__box">
          <div className="card__box-date">
            <span>{date}</span>
            <span>{time}</span>
          </div>
          <div className="card__box-btn">
            {/* <Button title="Редактировать" /> */}
            <Button title="Удалить" onClick={() => {
              setIsOpenModal(true);
              setId(id);
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};
