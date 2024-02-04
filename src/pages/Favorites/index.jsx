import { useDispatch, useSelector } from "react-redux";
import { SectionStyled } from "../Catalog/Catalog.styled";
import CarCard from "../../components/CarCard";
import { useEffect } from "react";
import { setFavorite } from "../../redux/favorites/favoriteSlise";
import { getAllItems } from "../../redux/cars/operations";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorites);
  const allItems = useSelector((state) => state.cars.allItems);

  const storageID = JSON.parse(localStorage.getItem("favorites")) || {};
  const storageIDTrue = Object.keys(storageID).filter(
    (ID) => storageID[ID] === true
  );
  console.log("storageIDTrue", storageIDTrue);
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
  // useEffect(() => {
  //   storageIDTrue.forEach((ID) => {
  //     const favoriteCarOBJ = allItems.find((item) => item.id === parseInt(ID));
  //     console.log("favoriteCarOBJ", favoriteCarOBJ);
  //     if (favoriteCarOBJ) {
  //       dispatch(setFavorite(favoriteCarOBJ));
  //     }
  //   });
  // }, [storageIDTrue, allItems, dispatch]);
  return (
    <SectionStyled>
      <h1> Favorites</h1>
      <CarCard items={favorite} open={false} />
    </SectionStyled>
  );
};
export default Favorites;
