import { useEffect, useState } from "react";
import { delSeminars, getSeminars } from "../../api/seminarsApi";
import { Card } from "../Card/Card";
import "./cards.scss";

export type SeminarsType = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
};

export const Cards = () => {
  const [seminars, setSeminars] = useState<SeminarsType[]>([]);

  useEffect(() => {
    getSeminars().then((res) => {
      setSeminars(res);
    });
  }, []);

  const handleDelete = async ({ id }: { id: number }) => {
    try {
      await delSeminars({ id });

      const seminarsResponse = await getSeminars();
      setSeminars(seminarsResponse);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      {seminars.map((el) => (
        <Card
          key={el.id}
          photo={el.photo}
          title={el.title}
          id={el.id}
          description={el.description}
          date={el.date}
          time={el.time}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};
