import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email,
            password,
          }),
        }
      );

      const data = await response.text();

      alert(data);

      if (data.includes("Registration successful")) {
        navigate("/");
      }
    } catch (error) {
      console.error("Register Error:", error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-pink-50 px-4">
      <div className="w-full max-w-md bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-pink-100">
        <div className="text-center">
          <div className="text-5xl mb-3">🎓</div>

          <h1 className="text-4xl font-extrabold">
            <span className="text-gray-900">Student</span>
            <span className="text-pink-500">OS</span>
          </h1>

          <p className="text-gray-500 mt-2">AI Student Platform</p>
        </div>

        <h2 className="text-2xl font-bold text-center mt-8 text-gray-900">
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Start your AI learning journey today.
        </p>

        <form onSubmit={handleRegister} className="mt-8">
          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full border border-pink-200 rounded-2xl px-5 py-4 outline-none focus:border-pink-500 mb-4 text-gray-800"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border border-pink-200 rounded-2xl px-5 py-4 outline-none focus:border-pink-500 mb-4 text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border border-pink-200 rounded-2xl px-5 py-4 outline-none focus:border-pink-500 mb-4 text-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 to-pink-400 text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition disabled:opacity-70"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-pink-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;