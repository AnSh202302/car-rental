import { AppBar, MenuItem, MenuList, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <MenuList style={{ display: "flex" }}>
          <MenuItem component={Link} to="/" end="true">
            Home
          </MenuItem>
          <MenuItem component={Link} to="catalog">
            Catalog
          </MenuItem>
          <MenuItem component={Link} to="favorites">
            Favorites
          </MenuItem>
        </MenuList>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
