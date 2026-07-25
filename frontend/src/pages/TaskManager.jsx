import { useState } from "react";
import axios from "axios";

function TaskManager() {
  const [goal, setGoal] = useState("");
  const [tasks, setTasks] = useState("");

  const generateTasks = async () => {
    const res = await axios.post("https://studentos-ai-platform-1.onrender.com/api/tasks/suggest", { goal });
    setTasks(res.data);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-cyan-400">AI Task Manager</h1>

      <input
        className="w-full mt-6 bg-[#111] border border-gray-700 rounded-xl p-4"
        placeholder="Enter goal like Java Interview..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <button onClick={generateTasks} className="mt-4 bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold">
        Generate Tasks
      </button>

      <div className="mt-6 bg-[#111] p-6 rounded-xl whitespace-pre-line">
        {tasks || "Tasks will appear here..."}
      </div>
    </div>
  );
}

export default TaskManager;