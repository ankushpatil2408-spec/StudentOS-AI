import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import InterviewCoach from "./pages/InterviewCoach";
import StudyPlanner from "./pages/StudyPlanner";
import NotesGenerator from "./pages/NotesGenerator";
import TaskManager from "./pages/TaskManager";
import Analytics from "./pages/Analytics";
import AIChat from "./pages/AIChat";
import QuizGenerator from "./pages/QuizGenerator";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/interview-coach" element={<InterviewCoach />} />
        <Route path="/study-planner" element={<StudyPlanner />} />
        <Route path="/notes-generator" element={<NotesGenerator />} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/ai-chat" element={<AIChat />} />
        <Route path="/quiz-generator" element={<QuizGenerator />} />
        <Route path="/study-planner" element={<StudyPlanner />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
<Route path="/task-manager" element={<TaskManager />} />
<Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;