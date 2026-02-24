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
    <div className="login-container">
      <div className="login-card">
        <h2>Planzo MTSS</h2>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;