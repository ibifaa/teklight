import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import useAuth from "../hooks/UseAuth";

const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/login",
        formData,
        { withCredentials: true }
      );
      
      if (response.status === 200) {
        console.log(response.status)
        navigate("/dashboard");
        setIsAuthenticated(true);

       console.log(isAuthenticated)
        
      }
     
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      setErrors({ form: errorMessage }); // Display error at form level
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container pt-[100px]">
      <form className="login-form" onSubmit={handleSubmit}>
        <h3 className="login-title">Login</h3>

        {errors.form && <p className="error-message">{errors.form}</p>}

        <div className="form-group">
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <button
          className="form-button"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
