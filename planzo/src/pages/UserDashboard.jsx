import Layout from "../components/Layout";
import "../styles/dashboard.css";

const UserDashboard = () => {
  return (
    <Layout>
      <h2>User Dashboard</h2>

      <div className="card-container">
        <div className="card">My Tasks: 6</div>
        <div className="card">In Progress: 2</div>
        <div className="card">Completed: 4</div>
      </div>
    </Layout>
  );
};

export default UserDashboard;