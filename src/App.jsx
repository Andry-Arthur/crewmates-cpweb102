import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './routes/Home'
import Gallery from './routes/Gallery'
import Create from './routes/Create'
import Edit from './routes/Edit' // Import the Edit component

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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} /> {/* Add the new route */}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
