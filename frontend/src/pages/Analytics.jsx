import { useState } from "react";
import axios from "axios";

function Analytics() {
  const [summary, setSummary] = useState("");

  const getSummary = async () => {
    const res = await axios.get("https://studentos-ai-platform-1.onrender.com/api/analytics/summary");
    setSummary(res.data);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-cyan-400">AI Analytics</h1>

      <button onClick={getSummary} className="mt-6 bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold">
        Show Analytics
      </button>

      <div className="mt-6 bg-[#111] p-6 rounded-xl whitespace-pre-line">
        {summary || "Analytics summary will appear here..."}
      </div>
    </div>
  );
}

export default Analytics;