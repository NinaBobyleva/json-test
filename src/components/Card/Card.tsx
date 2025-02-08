import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./card.scss";

type CardProp = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
  setIsOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
};

export const Card = ({
  id,
  title,
  description,
  date,
  time,
  photo,
  setIsOpenModalDelete,
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
            <Link to={`/edit/${id}`}><Button title="Редактировать" /></Link>
            <Button title="Удалить" onClick={() => {
              setIsOpenModalDelete(true);
              setId(id);
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};
