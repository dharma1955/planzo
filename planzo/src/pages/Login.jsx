import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [role, setRole] = useState("USER");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("role", role);

    if (role === "ADMIN") {
      navigate("/admin-dashboard");
    } else {
      navigate("/user-dashboard");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-header">
          <h1>Planzo</h1>
          <p>Mini Task & Sprint Management System</p>
        </div>

        <div className="login-form">
          <label>Select Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="USER">Team Member (User)</option>
            <option value="ADMIN">Administrators</option>
          </select>

          <button className="login-btn" onClick={handleLogin}>
            Enter Dashboard
          </button>
        </div>

        <div className="login-footer">
          <small> Mock Hackathon Project</small>
        </div>
      </div>
    </div>
  );
};

export default Login;