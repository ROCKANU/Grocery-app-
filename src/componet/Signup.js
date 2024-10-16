import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      setIsFormValid(false);
    } else {
      setEmailError('');
      setIsFormValid(password.length >= 6 && password === confirmPassword);
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      setIsFormValid(false);
    } else {
      setPasswordError('');
      setIsFormValid(email.includes('@') && password === confirmPassword);
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match.');
      setIsFormValid(false);
    } else {
      setConfirmPasswordError('');
      setIsFormValid(email.includes('@') && password.length >= 6);
    }
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    validatePassword(passwordValue);
    validateConfirmPassword(confirmPassword); // Revalidate confirm password
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    validateConfirmPassword(confirmPasswordValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      console.log('Form Submitted:', { username, email, password });
      // Add logic for signup submission here
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="signup-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        
        <input
          type="email"
          placeholder="Email"
          className="signup-input"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}

        <input
          type="password"
          placeholder="Password (min 6 characters)"
          className="signup-input"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <p className="error-message">{passwordError}</p>}

        <input
          type="password"
          placeholder="Confirm Password"
          className="signup-input"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}

        <button className="signup-button" type="submit" disabled={!isFormValid}>
          Sign Up
        </button>
      </form>
      <p className="signup-login">
        Already have an account? <Link to="/login" className="signup-link">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
