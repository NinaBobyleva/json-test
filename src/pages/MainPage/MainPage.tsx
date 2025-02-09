import { Outlet } from "react-router-dom";
import { Main } from "../../components/Main/Main";
import "./mainPage.scss";
import { useAppSelector } from "../../store/store";

export const MainPage = () => {
  const error = useAppSelector((state) => state.seminars.error);
  const isLoad = useAppSelector((state) => state.seminars.isLoad);
  return (
    <div className="wrapper">
      <h1 className="title">Seminars</h1>
      {isLoad ? <div className="load"><img src="./loader/spinner.gif" alt="load" /></div> : null}
      {error ? <p className="err">{error}</p> : <>
          <Outlet />
          <Main />
        </>
      }
    </div>
  );
};
