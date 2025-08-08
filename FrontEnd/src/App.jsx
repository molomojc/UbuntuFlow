import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import  Landing  from "@/pages/Landing/Landing";
import JobSearchPage from "./pages/JobSearch/JobSearch";
import EconomicSupport from "./pages/EconomicSupport/EconomicSupport.jsx";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/jobsearch" element={<JobSearchPage/>} />
      <Route path="/esupport" element={<EconomicSupport/>} />
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
      <Route path="*" element={<Navigate to="/landing" replace />} />
    </Routes>
  );
}

export default App;
