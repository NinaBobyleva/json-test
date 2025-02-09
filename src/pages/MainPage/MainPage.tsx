import { Outlet } from "react-router-dom";
import { Main } from "../../components/Main/Main";
import "./mainPage.scss";
import { useAppSelector } from "../../store/store";

export const MainPage = () => {
  const error = useAppSelector((state) => state.seminars.error);
  return (
    <div className="wrapper">
      <h1 className="title">Seminars</h1>
      <p className="err">{error && error}</p>
      <Outlet />
      <Main />
    </div>
  );
};
