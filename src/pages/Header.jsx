import React, { useEffect, useState } from "react";
import "./Header.css";
import marubeniLogo from "../assets/grain.jpg";
import SearchIcon from "@mui/icons-material/Search";
import user from "../assets/download.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

import { Menu, MenuItem, Select } from "@mui/material";
import { authActions } from "../loginAuth/loginSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, data } = useSelector((state) => state.auth);
  const [location, setLocation] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const userLogout = () => {
    dispatch(authActions.logout());
  };

  useEffect(() => {
    if (window.location.pathname === "/selection") {
      setLocation("Bin Process");
    }
    if (window.location.pathname === "/dashboard") {
      setLocation("Dashboard");
    }
  }, [window.location.pathname]);

  return (
    <header className="header">
      <div className="logo-section">
        <span className="logo-section__name">HITACHI</span>
        <div className="logo-section_vertical"></div>
        <img src={marubeniLogo} className="logo__grain__updated" />
        {isAuth && <div className="logo-section_vertical"></div>}
        {isAuth && <span className="logo-section__name">{location}</span>}
      </div>
      {isAuth && (
        <form className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search..."
          />
          <button className="search__button">
            <SearchIcon sx={{ fontSize: "2.4rem", fill: "#D3D3D3" }} />
          </button>
        </form>
      )}
      {isAuth && (
        <div className="user-nav">
          <span className="user_role">{data && data.user_role}</span>
          <img src={user} className="user-nav__user-photo" />

          <RiArrowDownSLine
            className="user-dropdown"
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <div className="menu__item__selection">
              <MenuItem>{data && data.user_full_name}</MenuItem>
              <MenuItem>{data && data.user_email}</MenuItem>
              <MenuItem
                sx={{ color: "#E85A4F" }}
                onClick={() => {
                  handleClose();
                  userLogout();
                }}
              >
                Logout
              </MenuItem>
            </div>
          </Menu>
        </div>
      )}
    </header>
  );
};

export default Header;
