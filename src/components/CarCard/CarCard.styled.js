import styled from "styled-components";
import { Card, CardMedia } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const CarCardList = styled("ul")(({ open }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 29,
  paddingBottom: open || open === undefined ? 0 : 40,
  "&>li": {
    overflowY: open || open === undefined ? "auto" : "hidden",
  },
}));

export const CardWrapper = styled(Card)(({ open }) => ({
  maxWidth: open || open === undefined ? 469 : 274,
  position: "relative",
  maxHeight: 450,

  "&>button": {
    position: "absolute",
    right: "0%",
  },
}));

export const NotFavoriteIcon = styled(FavoriteBorderIcon)({
  color: "#fff",
});

export const Favorite = styled(FavoriteIcon)({
  color: "#ff0000",
  width: 100,
  height: 100,
});

export const CardMediaStyled = styled(CardMedia)({
  height: 268,
  borderRadius: 14,
});

export const CardContentStyled = styled("div")({
  padding: "14px 8px",
});

export const WrapperText = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  "& span": {
    color: "#0c8ce9",
  },
});
