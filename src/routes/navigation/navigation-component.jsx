import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./navigation-styles.css";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/exo1" className="nav-link">
            Exerice choix multiples
          </NavLink>
          <NavLink to="/exo2" className="nav-link">
            Exercice reconnaissance vocale
          </NavLink>
          <NavLink to="/exo3" className="nav-link">
            Exerice traduction écrite
          </NavLink>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
