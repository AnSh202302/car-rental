import { useDispatch, useSelector } from "react-redux";
import { SectionStyled } from "../Catalog/Catalog.styled";
import CarCard from "../../components/CarCard";
import { useEffect, useState } from "react";
import { setFavorite } from "../../redux/favorites/favoriteSlise";
import { getAllItems } from "../../redux/cars/operations";
import CarModal from "../../components/Modal";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorites);
  const allItems = useSelector((state) => state.cars.allItems);
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState([]);

  const storageID = JSON.parse(localStorage.getItem("favorites")) || {};
  const storageIDTrue = Object.keys(storageID).filter(
    (ID) => storageID[ID] === true
  );
  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  useEffect(() => {
    const favoriteCars = allItems.filter((item) =>
      storageIDTrue.includes(item.id.toString())
    );
    favoriteCars.forEach((car) => {
      dispatch(setFavorite(car));
    });
  }, [storageIDTrue, allItems, dispatch]);
  const handleClose = () => {
    setSelectedCar(null);
    setOpen(false);
  };
  const handleOpen = (car) => {
    setSelectedCar([car]);
    setOpen(true);
  };
  return (
    <>
      <SectionStyled>
        <h1> Favorites</h1>
        <CarCard items={favorite} open={false} handleOpen={handleOpen} />
      </SectionStyled>
      <CarModal
        open={open}
        handleClose={handleClose}
        selectedCar={selectedCar}
      />
    </>
  );
};
export default Favorites;
