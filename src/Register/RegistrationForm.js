import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // New state variable for success message

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    if (username.trim().length < 5 || password.trim().length < 5) {
      setError('Username and password must be at least 5 characters long');
      return;
    }

    try {
      // Send registration request to backend server
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Handle response from the server
      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        setSuccess(true); // Set success state to true
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('An error occurred during registration');
    }

    // Reset form fields and error message
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      {success ? (
        <p className="success-message">Registration successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default RegistrationForm;
