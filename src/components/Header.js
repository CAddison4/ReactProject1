// Header

import Menu from "./Menu";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { appTitle } from "../globals/globals";
// import '../styles/style.css';

const Header = () => {
  function blur(event) {
    event.target.blur();
  }
  return (
    <header>
      <h1>
        <Link to="/" onClick={blur}>{appTitle}</Link>
      </h1>
      <div className="navigation">
        {<Nav blur={blur} />}
        {<Menu blur={blur}/>}
      </div>
    </header>
  );
};

export default Header;