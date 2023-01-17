import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import routes from "./components/routes";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          {routes.map((route) => {
            return <Route key={route.id} {...route} />;
          })}
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
