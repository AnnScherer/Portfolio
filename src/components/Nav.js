import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-me">Über mich</NavLink>
      <NavLink to="/contact">Kontakt</NavLink>
      <NavLink to="/lebenslauf">Lebenslauf</NavLink>
    </nav>
  );
};

export default Nav;
