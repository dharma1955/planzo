import Layout from "../components/Layout";
import "../styles/dashboard.css";

const AdminDashboard = () => {
  return (
    <Layout>
      <h2>Admin Dashboard</h2>

      <div className="card-container">
        <div className="card">Total Tasks: 25</div>
        <div className="card">TODO: 8</div>
        <div className="card">IN_PROGRESS: 6</div>
        <div className="card">DONE: 11</div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;