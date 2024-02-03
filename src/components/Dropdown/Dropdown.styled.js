import styled from "styled-components";

export const DropdownWrapper = styled("div")({
  //   display: "flex",
  paddingBottom: 30,
  "&>select": {
    padding: 8,
    borderRadius: 8,
    border: "1px solid #1976d2",
    outline: "none",
    color: "#1976d2",
    cursor: "pointer",
  },
});
