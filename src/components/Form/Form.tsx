import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "./form.scss";
import { Button } from "../Button/Button";
import { paths } from "../../paths";
import { useState } from "react";
import { editSeminars, getSeminars } from "../../api/seminarsApi";
import { setError, setSeminars } from "../../store/features/seminarsSlice";

export type SeminarEditType = {
  title: string;
  description: string;
  date: string;
  time: string;
};

export const Form = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const seminars = useAppSelector((state) => state.seminars.seminars);
  const seminarCard = seminars.find((seminar) => String(seminar.id) === id);
  const [errorText, setErrorText] = useState(false);
  const [inputEdit, setInputEdit] = useState({
    title: seminarCard?.title,
    description: seminarCard?.description,
    date: seminarCard?.date,
    time: seminarCard?.time,
  });

  const onSaveInputEdit = async () => {
    if (
      !inputEdit.title ||
      !inputEdit.description ||
      !inputEdit.date ||
      !inputEdit.time
    ) {
      setErrorText(true);
      return;
    }

    try {
      await editSeminars({
        id: seminarCard?.id,
        title: inputEdit.title,
        description: inputEdit.description,
        date: inputEdit.date,
        time: inputEdit.time,
        photo: seminarCard?.photo,
      })

      const editResponse = await getSeminars();
      dispatch(setSeminars(editResponse));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    } finally {
      console.log("end");
    }
  };

  return (
    <form action="" className="form">
      <input
        type="text"
        value={inputEdit.title}
        onChange={(e) => {
          setInputEdit({ ...inputEdit, title: e.target.value });
        }}
        className="form__title"
      />
      <textarea
        name=""
        value={inputEdit.description}
        onChange={(e) => {
          setInputEdit({ ...inputEdit, description: e.target.value });
        }}
        id=""
        className="form__textarea"
      ></textarea>
      <div className="form__box">
        <input
          type="text"
          value={inputEdit.date}
          onChange={(e) => {
            setInputEdit({ ...inputEdit, date: e.target.value });
          }}
          className="form__box-time"
        />
        <input
          type="text"
          value={inputEdit.time}
          onChange={(e) => {
            setInputEdit({ ...inputEdit, time: e.target.value });
          }}
          className="form__box-time"
        />
      </div>
      <div className="form__btn">
        <Button
          title="Сохранить"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            onSaveInputEdit();
            navigate(paths.HOME);
          }}
        />
        {errorText && <span className="error">Заполните все поля</span>}
        <Button
          title="Отменить"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            navigate(paths.HOME);
          }}
        />
      </div>
    </form>
  );
};
