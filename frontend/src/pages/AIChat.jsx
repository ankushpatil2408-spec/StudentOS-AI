import { useState } from "react";
import axios from "axios";

function AIChat() {

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const askAI = async () => {

    try {

      const res = await axios.post(
        "http://localhost:8080/api/ai/chat",
        {
          question,
        }
      );

      setResponse(res.data);

    } catch (error) {

      setResponse("Error connecting to AI");

    }

  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400">
        AI Chat
      </h1>

      <div className="mt-10">

        <textarea
          placeholder="Ask anything..."
          className="w-full h-40 bg-[#111] border border-gray-700 rounded-2xl p-5 outline-none"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={askAI}
          className="bg-cyan-400 text-black px-8 py-4 rounded-2xl mt-5 font-semibold"
        >
          Ask AI
        </button>

        <div className="bg-[#111] mt-10 p-6 rounded-2xl border border-gray-700">

          <h2 className="text-2xl font-semibold text-cyan-400">
            AI Response
          </h2>

          <p className="text-gray-300 mt-4">
            {response}
          </p>

        </div>

      </div>

    </div>
  );
}

export default AIChat;