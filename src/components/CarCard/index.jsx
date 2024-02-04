import { Button, CardActions, Typography } from "@mui/material";
import NotFount from "../../img/vecteezy_icon-image-not-found-vector_.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  clearFavorite,
  setFavorite,
} from "../../redux/favorites/favoriteSlise";
import CardInfoModal from "../CardInfoModal";
import {
  CarCardList,
  CardContentStyled,
  CardMediaStyled,
  CardWrapper,
  Favorite,
  NotFavoriteIcon,
  WrapperText,
} from "./CarCard.styled";

const CarCard = ({ handleOpen, items, open }) => {
  const dispatch = useDispatch();

  const favorite = useSelector((state) => state.favorites);
  const [favoritesState, setFavoritesState] = useState({});
  const isFavorite = (car) => favoritesState[car.id] || false;

  const getFormattedAddress = (address) => {
    const parts = address.split(", ");
    return `${parts[1]} | ${parts[2]}`;
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavoritesState(storedFavorites);
  }, []);

  const handleFavorites = (car) => {
    const index = favorite.findIndex((item) => item.id === car.id);
    if (index === -1) {
      dispatch(setFavorite(car));
      setFavoritesState((prevState) => {
        const newState = { ...prevState, [car.id]: true };
        localStorage.setItem("favorites", JSON.stringify(newState));
        return newState;
      });
    } else {
      dispatch(clearFavorite(car));
      setFavoritesState((prevState) => {
        const newState = { ...prevState, [car.id]: false };
        localStorage.setItem("favorites", JSON.stringify(newState));
        return newState;
      });
    }
  };

  return (
    <CarCardList open={open}>
      {items &&
        items.map((item) => (
          <CardWrapper open={open} component="li" key={item.id}>
            <Button onClick={() => handleFavorites(item)}>
              {!isFavorite(item) ? (
                <NotFavoriteIcon fontSize="large" />
              ) : (
                <Favorite fontSize="large" />
              )}
            </Button>
            <CardMediaStyled
              component="img"
              alt={item.make}
              image={item.img ? item.img : NotFount}
            />
            <CardContentStyled>
              <WrapperText>
                <div>
                  <Typography gutterBottom variant="body1">
                    {item.make}
                    <span> {item.model}</span>, {item.year}
                  </Typography>
                </div>
                <Typography gutterBottom variant="body1">
                  {item.rentalPrice}
                </Typography>
              </WrapperText>
              <Typography variant="body2" color="text.secondary">
                {getFormattedAddress(item.address)} | {item.rentalCompany} |{" "}
                Premium {item.type} | {item.model} | {item.mileage} |{" "}
                {item.functionalities[0]}
              </Typography>
              {(open || open === undefined) && <CardInfoModal item={item} />}
            </CardContentStyled>
            <CardActions>
              {open || open === undefined ? (
                <Button component="a" href="tel:+380730000000">
                  Rental car
                </Button>
              ) : (
                <Button onClick={() => handleOpen(item)}>Learn More</Button>
              )}
            </CardActions>
          </CardWrapper>
        ))}
    </CarCardList>
  );
};
export default CarCard;