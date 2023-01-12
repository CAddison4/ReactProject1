// Nav
import { NavLink } from "react-router-dom";
import "../styles/style.css";

const Nav = ({ blur }) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/" onClick={blur}>Movies</NavLink>
        </li>
        <li>
          <NavLink to="/favourites" onClick={blur}>Favourites</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={blur}>About</NavLink>
        </li> 
      </ul>
    </nav>
  );
};

export default Nav;

