import { Box, Modal } from "@mui/material";
import ModalClose from "@mui/joy/ModalClose";
import CarCard from "./CarCard";

const CarModal = ({ open, handleClose, selectedCar }) => {
  const style = {
    width: 541,
    height: 500,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "24px",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ModalClose onClick={handleClose} />
        {selectedCar && <CarCard items={selectedCar} />}
        {console.log("itemModal", selectedCar)}
      </Box>
    </Modal>
  );
};
export default CarModal;
