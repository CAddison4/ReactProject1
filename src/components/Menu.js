import { slide as MenuOptions} from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Menu() {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
      setOpen(!isOpen)
    }
  
    const closeSideBar = () => {
      setOpen(false)
    }

    return (
      <MenuOptions right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
        <NavLink to="/" onClick={closeSideBar}>Movies</NavLink>
        <NavLink to="/favourites" onClick={closeSideBar}>Favourites</NavLink>
        <NavLink to="/about" onClick={closeSideBar}>About</NavLink>
      </MenuOptions>
    );
}

export default Menu;