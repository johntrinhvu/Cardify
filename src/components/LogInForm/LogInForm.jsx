import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LogInForm.css';

export default function LogInForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
      <div className="title-wrapper">
        <h1 className="title">Welcome back</h1>
      </div>
      <div className="login-container">
        <form autoComplete="off" onSubmit={handleSubmit} className="input-wrapper">
          <input type="email" placeholder="Email address" className="login-input-box" name="email" value={credentials.email} onChange={handleChange} required />
          <input type="password" placeholder="Password" className="login-input-box" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit" className="continue-btn">Continue</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
}