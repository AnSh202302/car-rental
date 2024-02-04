import { Typography } from "@mui/material";
import { ModalInfoList } from "./CardInfoModal.styled";

const CardInfo = ({ item }) => {
  const formattedMileage = item.mileage.toLocaleString("en-US");

  return (
    <div>
      <Typography variant="body2" mb="24px" mt="14px">
        {item.description}
      </Typography>
      <Typography variant="body2">Accessories and functionalities:</Typography>
      <ModalInfoList>
        {item.functionalities.map((func, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            {func}
          </Typography>
        ))}
      </ModalInfoList>
      <Typography variant="body2">Rental Conditions: </Typography>
      <ModalInfoList>
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
      </ModalInfoList>
    </div>
  );
};

export default CardInfo;
