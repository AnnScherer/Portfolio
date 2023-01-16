import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-box">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-me">Über mich</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
        <NavLink to="/lebenslauf">Lebenslauf</NavLink>
      </nav>
    </div>
  );
};

export default Nav;
