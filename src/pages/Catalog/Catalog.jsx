import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../redux/cars/operations";
import CarModal from "../../components/Modal";
// import { getError, getIsLoading } from "../redux/selectors";
import { Button } from "@mui/material";
import CarCard from "../../components/CarCard";
import Dropdown from "../../components/Dropdown";
import { CatalogSection } from "./Catalog.Styled";

const Catalog = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cars.items);
  const selected = useSelector((state) => state.selected);

  const filteredCars =
    selected === "Car brand" || !selected
      ? items
      : items.filter((item) => item.make === selected);
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
    <CatalogSection>
      <Dropdown />
      {filteredCars && <CarCard handleOpen={handleOpen} items={filteredCars} />}
      <div>
        {currentPage > 1 && (
          <Button
            variant="outlined"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Back
          </Button>
        )}
        {filteredCars.length === limit && (
          <Button
            variant="outlined"
            onClick={() => {
              setCurrentPage(currentPage + 1);
              window.scrollTo({ top: 0 });
            }}
          >
            Load More
          </Button>
        )}
      </div>
      <CarModal
        open={open}
        handleClose={handleClose}
        selectedCar={selectedCar}
      />
    </CatalogSection>
  );
};
export default Catalog;
