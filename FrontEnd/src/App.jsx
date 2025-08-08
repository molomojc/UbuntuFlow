import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import  Landing  from "@/pages/Landing/Landing";
import Profile from "@/pages/Profile/profile";
import ChatBoard from "./pages/ChatBoard/ChatAI";
import Community from "./pages/Community/Community"

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/profile" element={<Profile /> } />
      <Route path="/Chat" element={<ChatBoard /> } />
      <Route path="/Community" element={<Community />} />
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
      <Route path="*" element={<Navigate to="/landing" replace />} />
    </Routes>
  );
}

export default App;
