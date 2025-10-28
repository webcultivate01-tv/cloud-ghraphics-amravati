import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App
