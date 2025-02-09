import { useEffect } from "react";
import { getSeminars } from "../../api/seminarsApi";
import { Card } from "../Card/Card";
import "./cards.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setError, setIsLoad, setSeminars } from "../../store/features/seminarsSlice";

export const Cards = ({setIsOpenModalDelete}: {setIsOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const dispatch = useAppDispatch();
  const seminars = useAppSelector((state) => state.seminars.seminars);

  useEffect(() => {
    const getSeminarsData = () => {
      getSeminars().then((res) => {
        dispatch(setSeminars(res));
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          dispatch(setError(err.message));
        }
      })
      .finally(() => {
        dispatch(setIsLoad(false));
      })
    };


    getSeminarsData();
  }, [dispatch]);

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
          setIsOpenModalDelete={setIsOpenModalDelete}
        />
      ))}
    </div>
  );
};
