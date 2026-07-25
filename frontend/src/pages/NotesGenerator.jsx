import { useState } from "react";
import axios from "axios";

function NotesGenerator() {
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const generateNotes = async () => {
    if (!topic.trim()) {
      alert("Please enter a topic");
      return;
    }

    setLoading(true);
    setNotes("");

    try {
      const res = await axios.post(
        "https://studentos-ai-platform-1.onrender.com/api/notes/generate",
        {
          topic: topic,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setNotes(res.data);
    } catch (error) {
      console.error("Notes API Error:", error);
      setNotes("Error generating notes. Please check backend deployment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-cyan-400">
        AI Notes Generator
      </h1>

      <p className="text-gray-400 mt-2">
        Enter any topic and generate exam-ready notes.
      </p>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Enter topic like DBMS, Java, React..."
          className="w-full bg-[#111] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button
          onClick={generateNotes}
          disabled={loading}
          className="mt-5 bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Notes"}
        </button>
      </div>

      <div className="mt-8 bg-[#111] border border-gray-800 rounded-2xl p-6 whitespace-pre-line min-h-[180px]">
        {notes || "Your notes will appear here..."}
      </div>
    </div>
  );
}

export default NotesGenerator;