import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    validatePassword(passwordValue);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      setIsFormValid(false);
    } else {
      setEmailError('');
      setIsFormValid(password.length >= 6); // Check password length too
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      setIsFormValid(false);
    } else {
      setPasswordError('');
      setIsFormValid(email.includes('@')); // Check email validity too
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      console.log('Form Submitted:', { email, password });
      // Implement login logic here (e.g., call an API)
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordModal(true);
  };

  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
    console.log("Password reset request sent to:", forgotEmail);
    setShowForgotPasswordModal(false);
  };

  const handleCloseForgotPasswordModal = () => {
    setShowForgotPasswordModal(false);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={handleEmailChange}
          required
        />
        
        {emailError && <p className="error-message">{emailError}</p>}
        
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          className="login-input"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <p className="error-message">{passwordError}</p>}

        <button className="login-button" type="submit" disabled={!isFormValid}>
          Login
        </button>
      </form>
      
      <div className="login-links">
        <button onClick={handleForgotPasswordClick} className="login-link">Forgot Password?</button>
        <Link to="/signup" className="login-link">Sign Up</Link>
      </div>

      {showForgotPasswordModal && (
        <div className="forgot-password-modal">
          <div className="forgot-password-content">
            <h3>Reset Your Password</h3>
            <form onSubmit={handleForgotPasswordSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="forgot-password-input"
                required
              />
              <button type="submit" className="forgot-password-button">Submit</button>
              <button type="button" onClick={handleCloseForgotPasswordModal} className="forgot-password-close">
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

