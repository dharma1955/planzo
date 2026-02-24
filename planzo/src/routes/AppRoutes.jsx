import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import SprintBoard from "../pages/SprintBoard";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/user-dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/sprint-board"
        element={
          <ProtectedRoute>
            <SprintBoard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;