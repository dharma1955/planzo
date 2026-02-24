import Layout from "../components/Layout";
import "../styles/board.css";

const tasks = [
  { id: 1, title: "Design API", status: "TODO", priority: "HIGH" },
  { id: 2, title: "Build UI", status: "IN_PROGRESS", priority: "MEDIUM" },
  { id: 3, title: "Fix Bugs", status: "DONE", priority: "LOW" },
];

const SprintBoard = () => {
  return (
    <Layout>
      <h2>Sprint Board</h2>

      <div className="board">
        {["TODO", "IN_PROGRESS", "DONE"].map((status) => (
          <div key={status} className="column">
            <h3>{status}</h3>

            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div key={task.id} className={`task ${task.priority}`}>
                  {task.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default SprintBoard;