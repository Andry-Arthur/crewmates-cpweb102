import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './routes/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-view">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
