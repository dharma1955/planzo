import { Link, useLocation } from "react-router-dom";
import "../styles/layout.css";

const Sidebar = () => {
  const role = localStorage.getItem("role");
  const location = useLocation();

  return (
    <div className="sidebar">
      <Link
        className={location.pathname === "/sprint-board" ? "active" : ""}
        to="/sprint-board"
      >
        Sprint Board
      </Link>

      {role === "USER" && (
        <Link
          className={location.pathname === "/user-dashboard" ? "active" : ""}
          to="/user-dashboard"
        >
          Dashboard
        </Link>
      )}

      {role === "ADMIN" && (
        <Link
          className={location.pathname === "/admin-dashboard" ? "active" : ""}
          to="/admin-dashboard"
        >
          Admin Dashboard
        </Link>
      )}
    </div>
  );
};

export default Sidebar;