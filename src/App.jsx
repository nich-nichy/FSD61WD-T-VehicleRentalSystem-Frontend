import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/user/Home'
import VehicleShowcase from './pages/user/VehicleShowcase';
import GetStarted from './pages/user/GetStarted'
import Pricing from './pages/user/Pricing';
import Loader from './components/Loader';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';
import AdminLogin from './pages/admin/AdminLogin';
import ProtectedRoute from './ProtectedRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import Dashboard from './pages/user/Dashboard';
import BookVehicle from './pages/user/BookVehicle';

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
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/book-vehicle/:id" element={<BookVehicle />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/*<Route exact path="/request-password-reset" element={<RequestPassword />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/reset-password/:token" element={<ResetPassword />} /> */}
          <Route path="/admin-login" element={<ProtectedRoute element={<AdminLogin />} roles={['admin']} />} />
          <Route path="/admin" element={<ProtectedRoute element={<Dashboard />} roles={['admin']} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
