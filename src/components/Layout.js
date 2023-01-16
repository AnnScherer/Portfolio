import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Nav />
      <section>{children}</section>
      <div className="cloud1"></div>
      <div className="cloud2"></div>
      <Footer />
    </div>
  );
};

export default Layout;
