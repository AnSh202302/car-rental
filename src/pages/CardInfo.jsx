import { Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const CardInfo = ({ item }) => {
  const formattedMileage = item.mileage.toLocaleString("en-US");
  console.log("item", item);
  return (
    <div>
      <Typography variant="body2" mb="24px" mt="14px">
        {item.description}
      </Typography>
      <Typography variant="body2">Accessories and functionalities:</Typography>
      {item.functionalities.map((func) => (
        <Typography key={func.id} variant="body2" color="text.secondary">
          {func}
        </Typography>
      ))}
      <Typography variant="body2">Rental Conditions: </Typography>
      <ul style={{}}>
        <Typography component="li" variant="body2" color="text.secondary">
          Minimum age : {new Date().getFullYear() - item.year}
        </Typography>
        <Typography component="li" variant="body2" color="text.secondary">
          Minimum age :
        </Typography>
        <Typography component="li" variant="body2" color="text.secondary">
          Minimum age :
        </Typography>
        <Typography component="li" variant="body2" color="text.secondary">
          Mileage: {formattedMileage}
        </Typography>
        <Typography component="li" variant="body2" color="text.secondary">
          Price: {item.rentalPrice}
        </Typography>
      </ul>
    </div>
  );
};

export default CardInfo;
