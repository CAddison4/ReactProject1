import { getYear } from "../utils/dates";

const Footer = () => (
  <footer>
    <p>&copy; {getYear()} Catherine Addison & Adam Rodrigues</p>
  </footer>
);

export default Footer;