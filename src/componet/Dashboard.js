import React, { useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      
      {/* Welcome Message */}
      <p className="dashboard-content">
        Welcome to the Dashboard! Here’s where the main content goes.
      </p>

      {/* Exciting Announcement Section */}
      <div className="announcement-section">
        <h3>Exciting News!</h3>
        <p>We are thrilled to announce that we are launching our new updated website soon. Stay tuned for updates!</p>
      </div>

      {/* Sign-Up Registration Section */}
      <div className="registration-section">
        <button className="dashboard-button"><a href="/Signup">Signup</a></button>
      </div>
      <div className="registration-section">
        <button className="dashboard-button"><a href="/Login">Login</a></button>
      </div>

      {/* Quick Links Section */}
      <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/profile">Edit Profile</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
