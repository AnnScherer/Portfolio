import Footer from "./Footer";
import Nav from "./Nav";
import svg from "../hills.svg";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Nav />
      <section>{children}</section>
      <div className="svg">
        <img src={svg} alt="hills" />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
