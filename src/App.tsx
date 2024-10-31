import './App.css'
import AdminHome from './pages/Admin/AdminHome'
import Login from './pages/Admin/login'
import Home from './pages/Home'
import Report from './pages/Report/Report'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/report' element={<Report />} />
        <Route path='/admin' element={<Login />} />
        <Route path='/admin/dashboard' element={<AdminHome />} />
      </Routes>
    </div>
  )
}

export default App
