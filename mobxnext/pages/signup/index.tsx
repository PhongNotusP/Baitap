import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import { observer, inject } from "mobx-react";

const SignUp: React.FC<any> = () => {
  const [signupError, setSignupError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e:any) {
    e.preventDefault();
    fetch('http://[::1]:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data && data.error) {
          setSignupError(data.message);
        }
        if (data && data.token) {
          cookie.set('token', data.token, {expires: 2});
          Router.push('/');
        }
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Sign Up</p>
      <label htmlFor="email">
        email
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
        />
      </label>

      <br />

      <label htmlFor="password">
        password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
        />
      </label>

      <br />

      <input type="submit" value="Submit" />
      {signupError && <p style={{color: 'red'}}>{signupError}</p>}
    </form>
  );
};
export default SignUp