import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems, getItems } from "../../redux/cars/operations";
import CarModal from "../../components/Modal";
import { getError, getIsLoading } from "../../redux/selectors";
import { Button, Typography } from "@mui/material";
import CarCard from "../../components/CarCard";
import Dropdown from "../../components/Dropdown";
import { SectionStyled, WrapperNotFound } from "../Catalog/Catalog.styled";

const Catalog = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cars.items);
  const allItems = useSelector((state) => state.cars.allItems);
  const selected = useSelector((state) => state.selected);
  const isLoading = useSelector((state) => state.cars.isLoading);
  const error = useSelector(getError);

  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

  const filteredCars =
    selected === "Car brand" || !selected
      ? items
      : allItems.filter((item) => item.make === selected);

  useEffect(() => {
    dispatch(getItems({ currentPage, limit }));
    dispatch(getAllItems());
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
    setCurrentPage((prevPage) => prevPage + 1);
    dispatch(getItems({ currentPage: currentPage + 1, limit }));
    dispatch(getAllItems());
    window.scrollTo({ top: 0 });
  };

  return (
    <SectionStyled>
      <Dropdown setCurrentPage={setCurrentPage} />
      {!isLoading && !error && filteredCars.length > 0 ? (
        <CarCard handleOpen={handleOpen} items={filteredCars} open={open} />
      ) : (
        <WrapperNotFound>
          <Typography variant="h4" color="text.secondary">
            <span>{selected}</span> not found in the database. Please select a
            different car brand.
          </Typography>
        </WrapperNotFound>
      )}
      <div>
        {currentPage > 1 && (
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
        )}
        {filteredCars && filteredCars.length === limit && (
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
    </SectionStyled>
  );
};
export default Catalog;
