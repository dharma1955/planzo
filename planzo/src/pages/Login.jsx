import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [role, setRole] = useState("USER");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("role", role);
    role === "ADMIN"
      ? navigate("/admin-dashboard")
      : navigate("/user-dashboard");
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1>Planzo</h1>
        <p>Mini Task & Sprint Management</p>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="USER">Team Member</option>
          <option value="ADMIN">Administrator</option>
        </select>

        <button onClick={handleLogin}>Enter</button>
      </div>
    </div>
  );
};

export default Login;