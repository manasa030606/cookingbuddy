import React from 'react';
import './Auth.css';

const SignIn = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign In</h2>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="auth-btn">Sign In</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default SignIn;
