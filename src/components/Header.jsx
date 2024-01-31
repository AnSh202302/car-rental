import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav style={{ display: "flex", gap: 20 }}>
        <NavLink to="/car-rental/" end>
          Home
        </NavLink>
        <NavLink to="car-rental/catalog">Catalog</NavLink>
        <NavLink to="car-rental/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
};
export default Header;
