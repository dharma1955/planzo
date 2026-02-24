import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>Planzo MTSS</h2>
      </div>

      <div className="navbar-right">
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;