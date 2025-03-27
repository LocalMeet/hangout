import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/index'
import GlobalStyles from './globalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App;
