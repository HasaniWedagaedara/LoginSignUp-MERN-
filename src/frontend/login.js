import React from 'react';
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <h1>LoginPage</h1>
      <form>
        <input
          type='email'
          placeholder='Email'
          name='id'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
        />
        <input type='submit' value='Login' />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default LoginPage;
