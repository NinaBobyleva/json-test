import { delSeminars, getSeminars } from "../../api/seminarsApi";
import { setError, setIsLoad, setSeminars } from "../../store/features/seminarsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import "./modalDelete.scss";

type ModalDeleteProp = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalDelete = ({
  setIsOpenModal,
}: ModalDeleteProp) => {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.seminars.id);

  // Отправляет 'DELETE' запрос на сервер и запрашивает обновленные данные с сервера
  const handleDelete = async ({ id }: { id: string }) => {
    try {
      await delSeminars({ id });

      const seminarsResponse = await getSeminars();
      dispatch(setSeminars(seminarsResponse));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    } finally {
      dispatch(setIsLoad(false));
    }
  };
  return (
    <ModalWrapper>
      <Modal>
        <div className="modalDelete">
          <h3 className="modalDelete__title">Удалить Seminar</h3>
          <div className="modalDelete__btn">
            <Button
              title="Удалить"
              onClick={() => {
                handleDelete({ id });
                setIsOpenModal(false);
              }}
            />
            <Button title="Отменить" onClick={() => setIsOpenModal(false)} />
          </div>
        </div>
      </Modal>
    </ModalWrapper>
  );
};
