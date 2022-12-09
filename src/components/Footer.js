import { getYear } from "../utils/dates";
import '../styles/App.css';

const Footer = () => (
  <footer>
    <p>&copy; {getYear()} Catherine Addison & Adam Rodrigues</p>
  </footer>
);

export default Footer;