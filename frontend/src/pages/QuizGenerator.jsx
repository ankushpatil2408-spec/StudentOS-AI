import { useState } from "react";
import axios from "axios";

function QuizGenerator() {

  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuiz = async () => {

    if (!topic.trim()) {
      alert("Please enter a topic");
      return;
    }

    setLoading(true);
    setQuiz("");

    try {

      const res = await axios.post(
        "https://studentos-ai-platform-1.onrender.com/api/quiz/generate",
        {
          topic: topic,
        }
      );

      setQuiz(res.data);

    } catch (error) {

      console.error(error);
      setQuiz("Error generating quiz");

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold text-cyan-400">
        AI Quiz Generator
      </h1>

      <p className="text-gray-400 mt-2">
        Generate quiz questions for interview and exams.
      </p>

      <div className="mt-6">

        <input
          type="text"
          placeholder="Enter topic like Java, DBMS, React..."
          className="w-full bg-[#111] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button
          onClick={generateQuiz}
          disabled={loading}
          className="mt-5 bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Quiz"}
        </button>

      </div>

      <div className="mt-8 bg-[#111] border border-gray-800 rounded-2xl p-6 whitespace-pre-line min-h-[200px]">

        {quiz || "Your AI quiz will appear here..."}

      </div>

    </div>
  );
}

export default QuizGenerator;