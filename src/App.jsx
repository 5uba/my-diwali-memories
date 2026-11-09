import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Timeline from './components/Timeline/Timeline'
import Memories from './components/Memories/Memories'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-day" element={<Timeline />} />
          <Route path="/memories" element={<Memories />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
