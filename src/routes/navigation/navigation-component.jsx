import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./navigation-styles.css";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/exo1">Exerices choix multiples</NavLink>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
