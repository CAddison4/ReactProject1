// Header

import Menu from "./Menu";
import { Link } from "react-router-dom";
import { appTitle } from "../globals/globals";
// import '../styles/style.css';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">{appTitle}</Link>
      </h1>
      {<Menu />}
    </header>
  );
};

export default Header;