import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard'
import Data from './pages/Data/Data'
import Settings from './pages/Settings/Settings'
import Profile from './pages/Profile/Profile'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/data" element={<Data />} />
        <Route path="/history" element={<Navigate to="/data" replace />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App