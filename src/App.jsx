import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import OurWork from './pages/OurWork'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="work" element={<OurWork />} />
          <Route path="contact" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
