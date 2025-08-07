// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/SignUp/Signup.jsx'
//import About from './Pages/About/About.jsx'
//import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
