import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import "./form.scss";

export const Form = () => {
    const {id} = useParams();
    const seminars = useAppSelector((state) => state.seminars.seminars);
    // const seminarCard = seminars.find((seminar) => String(seminar.id) === id);
    
  return (
    <form action="" className="form">
      <input type="text" className="form__title" />
      <textarea name="" id="" className="form__textarea"></textarea>
      <div className="form__box">
        <input type="text" className="form__box-time" />
        <input type="text" className="form__box-time" />
      </div>
    </form>
  );
};
