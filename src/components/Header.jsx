import { AppBar, MenuItem, MenuList, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <MenuList style={{ display: "flex" }}>
          <MenuItem component={NavLink} to="/car-rental/" end>
            Home
          </MenuItem>
          <MenuItem component={NavLink} to="/car-rental/catalog">
            Catalog
          </MenuItem>
          <MenuItem component={NavLink} to="/car-rental/catalog">
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
