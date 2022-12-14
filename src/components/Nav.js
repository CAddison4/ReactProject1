// Nav
import { NavLink } from "react-router-dom";
import "../styles/style.css";

const Nav = () => {
  function blur(e) {
    e.target.blur();
  }

  return (
    <nav className="main-nav" onClick={blur}>
      <ul>
        <li>
          <NavLink to="/">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/favourites">Favourites</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li> 
      </ul>
    </nav>
  );
};

export default Nav;

