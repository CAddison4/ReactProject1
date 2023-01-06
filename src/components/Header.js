// Header

import Nav from "./Nav";
import { Link } from "react-router-dom";
import { appTitle } from "../globals/globals";
// import '../styles/style.css';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">{appTitle}</Link>
      </h1>
      {<Nav />}
    </header>
  );
};

export default Header;