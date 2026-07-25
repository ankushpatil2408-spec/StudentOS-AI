function InterviewCoach() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400">
        AI Interview Coach
      </h1>

      <p className="text-gray-400 mt-4 text-lg">
        Practice technical and HR interviews with AI.
      </p>

      <div className="mt-12 bg-[#111] border border-gray-800 rounded-3xl p-10">

        <h2 className="text-2xl font-semibold">
          Interview Question
        </h2>

        <div className="mt-6 bg-black border border-gray-700 rounded-2xl p-6">
          <p className="text-xl">
            Explain the difference between GET and POST methods in REST APIs.
          </p>
        </div>

        <textarea
          placeholder="Write your answer here..."
          className="w-full mt-8 bg-black border border-gray-700 rounded-2xl p-5 h-40 outline-none focus:border-cyan-400"
        />

        <button className="mt-8 bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold">
          Analyze Answer
        </button>

      </div>

      <div className="mt-12 bg-[#111] border border-gray-800 rounded-3xl p-8">

        <h2 className="text-2xl text-cyan-400 font-semibold">
          AI Feedback
        </h2>

        <p className="text-gray-400 mt-6">
          Good explanation, but try adding real-world examples and mention security aspects.
        </p>

      </div>

    </div>
  );
}

export default InterviewCoach;