import { useEffect, useState } from "react";
import { getSeminars } from "../../api/seminarsApi";
import { Card } from "../Card/Card";
import "./cards.scss"

type SeminarsType = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
};

export const Cards = () => {
  const [seminars, setSeminars] = useState<SeminarsType[]>([]);
  console.log(seminars);

  useEffect(() => {
    getSeminars().then((res) => {
      setSeminars(res);
    });
  }, []);
  return (
    <div className="container">
        {seminars.map((el) => (
            <Card key={el.id} photo={el.photo} title={el.title} desk={el.description} date={el.date} time={el.time} />
        ))}
    </div>
  );
};
