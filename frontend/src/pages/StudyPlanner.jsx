import { useState } from "react";
import axios from "axios";

function StudyPlanner() {

  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {

    if (!goal.trim()) {
      alert("Please enter your study goal");
      return;
    }

    setLoading(true);
    setPlan("");

    try {

      const res = await axios.post(
        "https://studentos-ai-platform-1.onrender.com/api/study/plan",
        {
          goal: goal,
        }
      );

      setPlan(res.data);

    } catch (error) {

      console.error(error);
      setPlan("Error generating study plan");

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold text-cyan-400">
        AI Study Planner
      </h1>

      <p className="text-gray-400 mt-2">
        Generate smart study plans using AI.
      </p>

      <div className="mt-6">

        <input
          type="text"
          placeholder="Enter goal like TCS NQT, Java Interview..."
          className="w-full bg-[#111] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

        <button
          onClick={generatePlan}
          disabled={loading}
          className="mt-5 bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Plan"}
        </button>

      </div>

      <div className="mt-8 bg-[#111] border border-gray-800 rounded-2xl p-6 whitespace-pre-line min-h-[200px]">

        {plan || "Your AI study plan will appear here..."}

      </div>

    </div>
  );
}

export default StudyPlanner;