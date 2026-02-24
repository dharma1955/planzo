import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>Planzo</h2>
        <span className="role-badge">{role}</span>
      </div>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;