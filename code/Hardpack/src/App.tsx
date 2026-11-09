import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import AppLayout from './components/Layout/AppLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Data from './pages/Data/Data'
import Settings from './pages/Settings/Settings'
import Profile from './pages/Profile/Profile'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Data />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          {/* old links */}
          <Route path="/data" element={<Navigate to="/analytics" replace />} />
          <Route path="/history" element={<Navigate to="/analytics" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
