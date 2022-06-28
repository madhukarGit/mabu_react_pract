import { NavLink } from "react-router-dom";
import BinProcess from "../../../assets/sidenav/BinProcess.svg";
import Dashboard from "../../../assets/sidenav/Dashboard.svg";
import Hamburger from "../../../assets/sidenav/Hamburger.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="nav__side-nav">
      <NavLink to="/" className="nav__side-nav-link">
        <img src={Hamburger} alt="hamburger" />
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "nav__side-nav-link--active" : "nav__side-nav-link"
        }
      >
        <img src={Dashboard} alt="dashboard" />
      </NavLink>
      <NavLink
        to="/selection"
        className={({ isActive }) =>
          isActive ? "nav__side-nav-link--active" : "nav__side-nav-link"
        }
      >
        <img src={BinProcess} alt="Bin Process" />
      </NavLink>
    </aside>
  );
};

export default Sidebar;
