import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import "./card.scss";
import { useAppDispatch } from "../../store/store";
import { setId } from "../../store/features/seminarsSlice";
import { paths } from "../../paths";

type CardProp = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
  setIsOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Card = ({
  id,
  title,
  description,
  date,
  time,
  photo,
  setIsOpenModalDelete,
}: CardProp) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
            <Link to={`/edit/${id}`}><Button title="Редактировать" onClick={() => setIsOpenModalDelete(false)} /></Link>
            <Button title="Удалить" onClick={() => {
              setIsOpenModalDelete(true);
              dispatch(setId(id));
              navigate(paths.HOME);
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};
