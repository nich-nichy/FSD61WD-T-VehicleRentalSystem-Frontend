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
import CancelBooking from './components/CancelBooking';
import CompleteBooking from './components/CompleteBooking';
import Posts from './components/Posts';
import Post from './components/Post';
import Comments from './components/Comments';
import ReviewPage from './components/Reviews';
import RequestPassword from './pages/user/RequestPassword';
import ResetPassword from './pages/user/ResetPassword';
import Info from './pages/user/Info'

function App() {
  const posts = [
    { id: '1', title: 'Why Our Rental System is the Best', excerpt: 'Discover...', content: 'At ORS...' },
    { id: '2', title: 'How to Rent a Vehicle in 5 Simple Steps', excerpt: 'Renting a vehicle...', content: 'Step 1...' }
  ];
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
          <Route path="/cancel-booking" element={<CancelBooking />} />
          <Route path="/complete-order" element={<CompleteBooking />} />
          <Route path="/posts" element={<Posts posts={posts} />} />
          <Route path="/posts/:postId" element={<Post posts={posts} />} />
          <Route path="/all-comments" element={<Comments />} />
          <Route exact path="/request-password-reset" element={<RequestPassword />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard />} roles={['admin']} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
