import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import "./modalDelete.scss";

type ModalDeleteProp = {
  id: number;
  handleDelete: ({ id }: { id: number }) => void;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalDelete = ({ id, handleDelete, setIsOpenModal }: ModalDeleteProp) => {
    // console.log(id);
  return (
    <ModalWrapper>
      <Modal>
        <div className="modalDelete">
          <h3 className="modalDelete__title">Удалить Session</h3>
          <div className="modalDelete__btn">
            <Button title="Удалить" onClick={() => {
                handleDelete({ id });
                setIsOpenModal(false);
            }} />
            <Button title="Отменить" onClick={() => setIsOpenModal(false)} />
          </div>
        </div>
      </Modal>
    </ModalWrapper>
  );
};
