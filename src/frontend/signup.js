import React from 'react';
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div>
      <h1>SignUpPage</h1>
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
        <input type='submit' value='Sign Up' />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/">Login Page</Link>
    </div>
  );
}

export default SignUpPage;