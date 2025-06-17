import { Modal } from "react-bootstrap";
import Feedback from "./Contacts/Feedback";

export default function ModalForm(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Обратная связь
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Feedback isModal={true} />
      </Modal.Body>
    </Modal>
  );
}
