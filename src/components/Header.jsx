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
        {/* <nav style={{ display: "flex", gap: 20 }}>
          <NavLink to="/car-rental/" end>
            Home
          </NavLink>
          <NavLink to="car-rental/catalog">Catalog</NavLink>
          <NavLink to="car-rental/favorites">Favorites</NavLink>
        </nav> */}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
