import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/getStarted" element={<GetStarted />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
