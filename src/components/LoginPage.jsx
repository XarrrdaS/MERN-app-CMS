import React from 'react';
import './style.css';

const LoginPage = ({ setLogin, setPassword, handleLogin }) => {
  return (
    <div className='container2'>
      <h1 className='login'>Log in to CMS!</h1>
      <input
        type="text"
        placeholder="Login"
        className='login-input'
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className='login-input'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className='login-button'>Login</button>
    </div>
  );
};

export default LoginPage;
