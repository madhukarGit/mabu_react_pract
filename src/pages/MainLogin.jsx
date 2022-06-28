import "./Main.css";
import corporation from "../assets/grain.jpg";
import MarubeniLoginLogo from "../assets/MarubeniLogoLogin.svg";
import { useState, useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../loginAuth/loginActions";
import BinGrainLogo from "../components/bins/BinGrainLogo";

const MainLogin = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginUser({ user, pwd }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUserInput = (e) => {
    setUser(e.target.value);
  };

  const handlePwdInput = (e) => {
    setPwd(e.target.value);
  };

  return (
    <section className="main-section">
      <div className="bg-logo">
        <div className="sub-logo-menu">
          <div className="sub-menu">
            <span className="sub__font">Hitachi</span>
            <span className="sub__font__conjuction">and</span>
            <img
              src={corporation}
              alt="marubeni"
              className="img__cultivating__logo"
            />
          </div>
          <span className="sub__font__description">
            A SOLUTION FOR AUTOMATED GRAIN STORAGE MANAGEMENT
          </span>
        </div>
      </div>
      <div className="form-login">
        <section className="welocme__logo">
          <img src={MarubeniLoginLogo} alt="login logo" />
          <span className="welocme__logo__text">{`${"BIN"} ${"Allocation/Selection"}`}</span>
        </section>
        <form onSubmit={handleSubmit}>
          <div className="form-labels-align">
            <label className="form-label">username</label>
            <input
              type="email"
              value={user}
              onChange={handleUserInput}
              required
            />
          </div>
          <div className="form-labels-align">
            <label className="form-label">password</label>
            <input type="password" onChange={handlePwdInput} required />
          </div>
          <div className="form-labels-checkbox">
            <input type="checkbox" />
            <label className="form-label-checkbox">Remember me</label>
            <button className="login__user_form">login</button>
          </div>
        </form>
        <div className="user__forgot_password">
          <span className="forgot-cascade">Forgot your credentials ?</span>
        </div>
      </div>
    </section>
  );
};

export default MainLogin;
