import { useEffect, useState } from "react";
import { delSeminars, getSeminars } from "../../api/seminarsApi";
import { Card } from "../Card/Card";
import "./cards.scss";
import { ModalDelete } from "../ModalDelete/ModalDelete";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setSeminars } from "../../store/features/seminarsSlice";

// export type SeminarsType = {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   time: string;
//   photo: string;
// };

export const Cards = () => {
  // const [seminars, setSeminars] = useState<SeminarsType[]>([]);
  const dispatch = useAppDispatch();
  const seminars = useAppSelector((state) => state.seminars.seminars)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  // const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    getSeminars().then((res) => {
      dispatch(setSeminars(res));
      // setSeminars(res);
    });
  }, []);

  const handleDelete = async ({ id }: { id: number }) => {
    try {
      await delSeminars({ id });

      // const seminarsResponse = await getSeminars();
      // setSeminars(seminarsResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {isOpenModalDelete && <ModalDelete id={id} handleDelete={handleDelete} setIsOpenModal={setIsOpenModalDelete} />}
      {/* {isOpenModalEdit && <ModalEdit />} */}
      {seminars.map((el) => (
        <Card
          key={el.id}
          photo={el.photo}
          title={el.title}
          id={el.id}
          description={el.description}
          date={el.date}
          time={el.time}
          setId={setId}
          setIsOpenModalDelete={setIsOpenModalDelete}
        />
      ))}
    </div>
  );
};
