import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Lebenslauf from "./pages/Lebenslauf";
import NotFound from "./NotFound";
import Impressum from "./pages/Impressum";
import { Navigate } from "react-router-dom";

const routes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "*", element: <NotFound />, id: 2 },
  { path: "/contact", element: <Contact />, id: 3 },
  { path: "/lebenslauf", element: <Lebenslauf />, id: 4 },
  { path: "/about-me", element: <AboutMe />, id: 5 },
  { path: "/impressum", element: <Impressum />, id: 6 },
  { path: "/final-project-react", element: <Navigate to="/" />, id: 7 },
];

export default routes;
