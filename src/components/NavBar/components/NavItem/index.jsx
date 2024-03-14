import { Link } from "react-router-dom";
import "./styles.css";

const NavItem = ({ label = "Home", to, onClick }) => {
  return (
    <Link className="navItem" to={to} onClick={onClick}>
      <p className="navItemLinkText">{label}</p>
    </Link>
  );
};

export default NavItem;
