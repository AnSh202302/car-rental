import { Modal } from "@mui/material";
import ModalClose from "@mui/joy/ModalClose";
import CarCard from "../CarCard";
import { WrapperModal } from "./Modal.styled";

const CarModal = ({ open, handleClose, selectedCar }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <WrapperModal open={open}>
        <ModalClose onClick={handleClose} />
        {selectedCar && <CarCard items={selectedCar} />}
      </WrapperModal>
    </Modal>
  );
};
export default CarModal;
