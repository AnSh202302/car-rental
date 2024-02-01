import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../redux/cars/operations";
import NotFount from "../img/vecteezy_icon-image-not-found-vector_.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { getError, getIsLoading } from "../redux/selectors";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { clearFavorite, setFavorite } from "../redux/favorites/favoriteSlise";

const Catalog = () => {
  const dispatch = useDispatch();

  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const items = useSelector((state) => state.cars.items);
  const favorite = useSelector((state) => state.favorites);
  const [favoritesState, setFavoritesState] = useState({});
  const isFavorite = (car) => favoritesState[car.id] || false;

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    console.log(storedFavorites);
    setFavoritesState(storedFavorites);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

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

  useEffect(() => {
    dispatch(getItems({ currentPage, limit }));
  }, [dispatch, currentPage]);

  return (
    <>
      <Card
        component="ul"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 29,
        }}
      >
        {items &&
          items.map((item) => (
            <li key={item.id} style={{ maxWidth: 274, position: "relative" }}>
              <Button
                style={{ position: "absolute", right: "0%" }}
                onClick={() => handleFavorites(item)}
              >
                {!isFavorite(item) ? (
                  <FavoriteBorderIcon
                    fontSize="large"
                    style={{ fill: "#fff" }}
                  />
                ) : (
                  <FavoriteIcon fontSize="large" style={{ fill: "#ff0000" }} />
                )}
              </Button>
              <CardMedia
                component="img"
                alt={item.make}
                height="268"
                image={item.img ? item.img : NotFount}
                style={{ borderRadius: 14 }}
              />

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.make} {item.model}, {item.year} {item.rentalPrice}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.rentalCompany} | {item.type} | {item.make} |{" "}
                  {item.mileage}
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Learn More</Button>
              </CardActions>
            </li>
          ))}
      </Card>
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
