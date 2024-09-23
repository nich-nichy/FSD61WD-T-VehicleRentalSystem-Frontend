import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/user/Home'
import VehicleShowcase from './pages/user/VehicleShowcase';
import GetStarted from './pages/user/GetStarted'
import Pricing from './pages/user/Pricing';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/getStarted" element={<GetStarted />} />
          <Route exact path="/vehicles" element={<VehicleShowcase />} />
          <Route exact path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
