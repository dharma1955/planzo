import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/board.css";

const tasks = [
  { id: 1, title: "Build Login API", status: "TODO", priority: "HIGH" },
  { id: 2, title: "Design Dashboard", status: "IN_PROGRESS", priority: "MEDIUM" },
  { id: 3, title: "Fix Bug #101", status: "DONE", priority: "LOW" },
];

const SprintBoard = () => {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="content">
          <h2>Sprint Board</h2>

          <div className="board">
            {["TODO", "IN_PROGRESS", "DONE"].map((col) => (
              <div key={col} className="column">
                <h3>{col}</h3>
                {tasks
                  .filter((task) => task.status === col)
                  .map((task) => (
                    <div key={task.id} className={`task ${task.priority}`}>
                      {task.title}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SprintBoard;