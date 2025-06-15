import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ShetlandDialectPrivacyPolicy from './pages/ShetlandDialectPrivacyPolicy'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shetland-dictionary-privacy-policy" element={<ShetlandDialectPrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
