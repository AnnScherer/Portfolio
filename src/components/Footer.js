import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-child">
        <a href="https://www.facebook.com/ann.hardt" target="blank">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="https://github.com/AnnScherer" target="blank">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <Link to="/impressum">Impressum</Link>
      </div>
    </div>
  );
};

export default Footer;
