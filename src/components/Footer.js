import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-child">
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-github"></ion-icon>
        <Link to="/impressum">Impressum</Link>
      </div>
    </div>
  );
};

export default Footer;
