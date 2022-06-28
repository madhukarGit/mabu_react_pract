import Layout from "./components/selection/layout/Layout";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLogin from "./pages/MainLogin";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Dashboard from "./components/selection-dashboard/Dashboard";

const App = () => {
  const { isAuth, error, data } = useSelector((state) => state.auth);
  const naviagte = useNavigate();
  console.log("isAuth ", isAuth);

  useEffect(() => {
    if (isAuth) {
      toast.success("login is successful");
      naviagte("/selection");
    } else {
      naviagte("/");
    }
    if (error) {
      toast.error("login failed");
    }
  }, [isAuth, error]);

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainLogin />} />
          <Route path="/selection" element={<Layout />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
