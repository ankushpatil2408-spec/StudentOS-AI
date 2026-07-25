import { Link, useNavigate, Navigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    navigate("/");
  };

  const tools = [
    { title: "AI Chat", desc: "Ask coding and study questions.", link: "/ai-chat", icon: "💬", color: "from-purple-500 to-indigo-500" },
    { title: "Notes Generator", desc: "Generate notes for any topic.", link: "/notes-generator", icon: "📄", color: "from-blue-500 to-cyan-500" },
    { title: "Quiz Generator", desc: "Create quizzes instantly.", link: "/quiz-generator", icon: "❓", color: "from-orange-400 to-pink-500" },
    { title: "Study Planner", desc: "Plan your study goals.", link: "/study-planner", icon: "📅", color: "from-green-400 to-emerald-500" },
    { title: "Resume Analyzer", desc: "Improve your resume.", link: "/resume-analyzer", icon: "📌", color: "from-pink-500 to-rose-500" },
    { title: "Task Manager", desc: "Manage daily tasks.", link: "/task-manager", icon: "✅", color: "from-violet-500 to-purple-500" },
    { title: "Interview Coach", desc: "Practice interviews.", link: "/interview-coach", icon: "🎤", color: "from-teal-400 to-cyan-500" },
    { title: "Analytics", desc: "Track your progress.", link: "/analytics", icon: "📊", color: "from-fuchsia-500 to-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50 text-gray-900 flex">
      <aside className="w-[300px] min-h-screen bg-white/80 backdrop-blur-xl border-r border-pink-100 shadow-xl p-6">
        <div className="text-center mt-6">
          <div className="text-5xl mb-3">🎓</div>
          <h1 className="text-4xl font-extrabold">
            <span className="text-gray-900">Student</span>
            <span className="text-pink-500">OS</span>
          </h1>
          <p className="text-gray-500 mt-2 font-medium">AI Student Platform</p>
        </div>

        <nav className="mt-10 space-y-3">
          <Link to="/dashboard" className="block bg-gradient-to-r from-pink-500 to-pink-400 text-white px-5 py-3 rounded-2xl font-bold shadow-lg">
            Dashboard
          </Link>

          {tools.map((tool) => (
            <Link key={tool.title} to={tool.link} className="block text-gray-600 hover:text-pink-500 hover:bg-pink-50 px-5 py-3 rounded-2xl transition">
              {tool.title}
            </Link>
          ))}
        </nav>

        <button onClick={handleLogout} className="w-full mt-8 bg-gradient-to-r from-pink-500 to-pink-400 text-white py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition">
          Logout
        </button>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Welcome back, Harsh! 👋
            </h2>
            <p className="text-gray-500 mt-2 text-lg">
              Manage your learning journey with AI tools.
            </p>
          </div>

          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-400 text-white flex items-center justify-center font-bold text-lg shadow-lg">
            H
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
          <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-6">
            <h3 className="text-gray-600 font-semibold">AI Tools</h3>
            <p className="text-3xl font-bold mt-2">8+</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-6">
            <h3 className="text-gray-600 font-semibold">Study Progress</h3>
            <p className="text-3xl font-bold mt-2">72%</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-6">
            <h3 className="text-gray-600 font-semibold">Interview Ready</h3>
            <p className="text-3xl font-bold mt-2">80%</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-6">
            <h3 className="text-gray-600 font-semibold">Daily Streak</h3>
            <p className="text-3xl font-bold mt-2">7 Days</p>
          </div>
        </div>

        <h3 className="text-2xl font-extrabold text-gray-900 mt-10 mb-5">
          Your AI Tools
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.title} to={tool.link} className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100 hover:shadow-2xl hover:-translate-y-1 transition flex items-center gap-5">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl shadow-lg`}>
                {tool.icon}
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900">{tool.title}</h4>
                <p className="text-gray-500 mt-2 text-sm">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;