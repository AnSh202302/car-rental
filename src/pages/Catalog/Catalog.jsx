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
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

  const filteredCars =
    selected === "Car brand" || !selected
      ? items
      : items.filter((item) => item.make === selected);

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
  const handleBack = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0 });
  };
  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0 });
  };

  return (
    <CatalogSection>
      <Dropdown />
      {filteredCars && (
        <CarCard handleOpen={handleOpen} items={filteredCars} open={open} />
      )}
      <div>
        {currentPage > 1 && (
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
        )}
        {filteredCars.length === limit && (
          <Button variant="outlined" onClick={handleLoadMore}>
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
