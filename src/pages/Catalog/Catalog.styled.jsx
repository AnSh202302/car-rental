import styled from "@emotion/styled";

export const SectionStyled = styled("section")({
  padding: "100px 20px 40px 20px",
  "&>div": {
    display: "flex",
    justifyContent: "center",
    gap: 40,
  },
});

export const WrapperNotFound = styled("div")({
  maxWidth: 400,
  margin: "0 auto",
  textAlign: "center",
  "& span": {
    color: "#1976d2",
  },
});
