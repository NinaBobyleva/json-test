import "./card.scss";

type CardProp = {
  title: string;
  desk: string;
  date: string;
  time: string;
  photo: string;
};

export const Card = ({ title, desk, date, time, photo }: CardProp) => {
  return (
    <div className="card">
      <img src={photo} className="card-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desk}</p>
        <div className="card-box">
          <div className="card-date">
            <p>{date}</p>
            <p>{time}</p>
          </div>
          <button className="card-btn">Удалить</button>
        </div>
      </div>
    </div>
  );
};
