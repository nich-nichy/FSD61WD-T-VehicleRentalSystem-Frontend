import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/user/Home'
import VehicleShowcase from './pages/user/VehicleShowcase';
import GetStarted from './pages/user/GetStarted'
import Pricing from './pages/user/Pricing';
import Loader from './components/Loader';
import Login from './pages/auth/login';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/getStarted" element={<GetStarted />} />
          <Route exact path="/vehicles" element={<VehicleShowcase />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/loader" element={<Loader />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/request-password-reset" element={<RequestPassword />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/reset-password/:token" element={<ResetPassword />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
