import "./App.css";
import { useEffect, useState } from "react";
import { getTask, addTask } from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTask();
    setTasks(data);
  };

  const handleAddTask = async () => {
    if (newTask.trim() === "") return;
    const addedTask = await addTask(newTask);
    setTasks([...tasks, addedTask]);
    setNewTask("");
  };
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Task Tracker</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
