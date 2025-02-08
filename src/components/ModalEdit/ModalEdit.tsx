import { Form } from "../Form/Form";
import { Modal } from "../Modal/Modal";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import "./modalEdit.scss";

export const ModalEdit = () => {
  return (
    <ModalWrapper>
      <div className="modalEdit">
        <Modal>
          <h3 className="modalEdit__title">Редактирование</h3>
          <Form />
        </Modal>
      </div>
    </ModalWrapper>
  );
};
