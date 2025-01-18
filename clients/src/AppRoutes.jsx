import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import LandingPage from "./pages/landingPage";
import About from "./pages/About";
import Services from "./pages/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

// Context and Hooks
import useAuth from "./hooks/UseAuth";
import { AuthProvider } from "./AuthProvider";
import {AuthContext} from "./AuthProvider";


function AppRoutes() {
  // Protect routes that require authentication
  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    // console.log(isAuthenticated)
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  // Restrict routes for authenticated users
  const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    // console.log(isAuthenticated)
    return isAuthenticated ? <Navigate to="/dashboard" /> : children;
  };

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default AppRoutes;
