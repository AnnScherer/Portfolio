import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-box">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-me">Über mich</NavLink>
        <NavLink to="/lebenslauf">Lebenslauf</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </nav>
    </div>
  );
};

export default Nav;
