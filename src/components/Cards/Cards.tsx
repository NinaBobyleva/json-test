import { useEffect, useState } from "react";
import { getSeminars } from "../../api/seminarsApi";
import { Card } from "../Card/Card";
import "./cards.scss";
import { ModalDelete } from "../ModalDelete/ModalDelete";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setError, setSeminars } from "../../store/features/seminarsSlice";

export const Cards = () => {
  const dispatch = useAppDispatch();
  const seminars = useAppSelector((state) => state.seminars.seminars);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

  useEffect(() => {
    getSeminars().then((res) => {
      dispatch(setSeminars(res));
    })
    .catch((err: unknown) => {
      if (err instanceof Error) {
        dispatch(setError(err.message));
      }
    })
  }, []);

  return (
    <div className="container">
      {isOpenModalDelete && <ModalDelete setIsOpenModal={setIsOpenModalDelete} />}
      {seminars.map((el) => (
        <Card
          key={el.id}
          photo={el.photo}
          title={el.title}
          id={el.id}
          description={el.description}
          date={el.date}
          time={el.time}
          setIsOpenModalDelete={setIsOpenModalDelete}
        />
      ))}
    </div>
  );
};
