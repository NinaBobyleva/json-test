import { Outlet } from "react-router-dom";
import { Main } from "../../components/Main/Main";
import "./mainPage.scss";

export const MainPage = () => {
  return (
    <div className="wrapper">
      <h1 className="title">Seminars</h1>
      <Outlet />
      <Main />
    </div>
  );
};
