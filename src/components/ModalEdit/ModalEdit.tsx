import { Form } from "../Form/Form";
import { Modal } from "../Modal/Modal";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import "./modalEdit.scss";

export const ModalEdit = () => {
  return (
    <ModalWrapper>
      <Modal>
        <h3 className="modalEdit__title">Редактирование семинара</h3>
        <Form />
      </Modal>
    </ModalWrapper>
  );
};
