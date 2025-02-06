import "./card.scss";

type CardProp = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
  handleDelete: ({ id }: { id: number }) => void;
};

export const Card = ({
  id,
  title,
  description,
  date,
  time,
  photo,
  handleDelete,
}: CardProp) => {
  return (
    <div className="card">
      <img src={photo} className="card-img" alt="#" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="card-box">
          <div className="card-date">
            <p>{date}</p>
            <p>{time}</p>
          </div>
          <button onClick={() => handleDelete({ id })} className="card-btn">
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};
