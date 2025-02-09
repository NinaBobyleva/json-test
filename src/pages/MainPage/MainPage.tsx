import { Outlet } from "react-router-dom";
import { Main } from "../../components/Main/Main";
import "./mainPage.scss";
import { useAppSelector } from "../../store/store";
import { useState } from "react";
import { ModalDelete } from "../../components/ModalDelete/ModalDelete";

export const MainPage = () => {
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const error = useAppSelector((state) => state.seminars.error);
  const isLoad = useAppSelector((state) => state.seminars.isLoad);
  return (
    <div className="wrapper">
      <h1 className="title">Семинары</h1>
      {isOpenModalDelete && <ModalDelete setIsOpenModal={setIsOpenModalDelete} />}
      {isLoad ? <div className="load"><img src="./loader/spinner.gif" alt="load" /></div> : null}
      {error ? <p className="err">{error}</p> : <>
          <Outlet />
          <Main setIsOpenModalDelete={setIsOpenModalDelete} />
        </>
      }
    </div>
  );
};
