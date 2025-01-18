import React, { useState } from 'react';
import axios from 'axios';
const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = '';

    if (name === 'first_name' || name === 'last_name') {
      if (!value.trim()) {
        error = `${name} is required.`;
      } else if (value.length < 2) {
        error = `${name} must be at least 2 characters.`;
      }
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        error = 'Email is required.';
      } else if (!emailRegex.test(value)) {
        error = 'Email is not valid.';
      }
    }

    if (name === 'password') {
      if (!value) {
        error = 'Password is required.';
      } else if (value.length < 6) {
        error = 'Password must be at least 6 characters long.';
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

            const newErrors = {};
            Object.keys(formData).forEach((key) => {
            const error = validate(key, formData[key]);
            if (error) newErrors[key] = error;
            });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const response = await axios.post('http://localhost:3000/api/admin/register', formData, {
                headers: {
                'Content-Type': 'application/json',
                },
            });
            console.log(response)
        console.log('Registration successful!');
        }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
          {errors.first_name && <p style={{ color: 'red' }}>{errors.first_name}</p>}
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
          {errors.last_name && <p style={{ color: 'red' }}>{errors.last_name}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
