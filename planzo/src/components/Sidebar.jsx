import { Link } from "react-router-dom";
import "../styles/layout.css";

const Sidebar = () => {
  const role = localStorage.getItem("role");

  return (
    <div className="sidebar">
      <Link to="/sprint-board">Sprint Board</Link>
      {role === "USER" && <Link to="/user-dashboard">Dashboard</Link>}
      {role === "ADMIN" && <Link to="/admin-dashboard">Admin Dashboard</Link>}
    </div>
  );
};

export default Sidebar;