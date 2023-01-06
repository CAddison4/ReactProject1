import { getYear } from "../utils/dates";
// import '../styles/style.css';

const Footer = () => (
  <footer>
    <p>&copy; {getYear()} Catherine Addison & Adam Rodrigues</p>
  </footer>
);

export default Footer;