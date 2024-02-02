import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../redux/cars/operations";
import CarModal from "../components/Modal";
// import { getError, getIsLoading } from "../redux/selectors";
import { Button } from "@mui/material";
import CarCard from "../components/CarCard";
import Dropdown from "../components/Dropdown";

const Catalog = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cars.items);
  const selected = useSelector((state) => state.selected);

  const filteredCars = selected
    ? items.filter((item) => item.make === selected)
    : items;
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    dispatch(getItems({ currentPage, limit }));
  }, [dispatch, currentPage]);

  const handleOpen = (car) => {
    setSelectedCar([car]);
    setOpen(true);
  };
  const handleClose = () => {
    setSelectedCar(null);
    setOpen(false);
  };
  return (
    <>
      <CarModal
        open={open}
        handleClose={handleClose}
        selectedCar={selectedCar}
      />

      <Dropdown />

      {filteredCars && <CarCard handleOpen={handleOpen} items={filteredCars} />}
      {currentPage > 1 && (
        <Button onClick={() => setCurrentPage(currentPage - 1)}>Back</Button>
      )}
      {items.length === limit && (
        <Button onClick={() => setCurrentPage(currentPage + 1)}>
          Load More
        </Button>
      )}
    </>
  );
};
export default Catalog;
