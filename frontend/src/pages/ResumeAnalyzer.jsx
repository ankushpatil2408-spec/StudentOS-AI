import { useState } from "react";
import axios from "axios";

function ResumeAnalyzer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const analyze = async () => {
    const res = await axios.post("https://studentos-ai-platform-1.onrender.com/api/resume/analyze", { text });
    setResult(res.data);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-cyan-400">Resume Analyzer</h1>

      <textarea
        className="w-full h-40 mt-6 bg-[#111] border border-gray-700 rounded-xl p-4"
        placeholder="Paste your resume text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={analyze} className="mt-4 bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold">
        Analyze Resume
      </button>

      <div className="mt-6 bg-[#111] p-6 rounded-xl whitespace-pre-line">
        {result || "Result will appear here..."}
      </div>
    </div>
  );
}

export default ResumeAnalyzer;