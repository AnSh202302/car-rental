import { Box } from "@mui/material";
import styled from "styled-components";

export const WrapperModal = styled(Box)({
  maxWidth: "100%",
  maxHeight: "90%",

  padding: 30,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  borderRadius: 24,
  backgroundColor: "#fff",
});
