import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import  Landing  from "@/pages/Landing/Landing";
import Profile from "@/pages/Profile/profile";
import Community from "@/pages/Community/Community";
import Chat from "@/pages/ChatBoard/ChatAI"
import EconomicSupport from "@/pages/EconomicSupport/EconomicSupport";
import JobSearchPage from "@/pages/JobSearch/JobSearch";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/Community" element={<Community />} />
      <Route path="/searchJob" element={<JobSearchPage />} />
      <Route path="/Economy" element={<EconomicSupport /> } />
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
      <Route path="*" element={<Navigate to="/landing" replace />} />
    </Routes>
  );
}

export default App;
