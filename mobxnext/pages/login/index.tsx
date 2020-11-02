import { observer, inject } from "mobx-react";
import cookie from 'js-cookie';
import Link from 'next/link'
import React, {useState} from 'react';
import Router from 'next/router';

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://[::1]:3000/users')
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          cookie.set('token', data.token, {expires: 2});
          Router.push('/');
        }
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Login</p>
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
      {loginError && <p style={{color: 'red'}}>{loginError}</p>}
      <Link href="/signup">
      <button>Sign-Up</button>
      </Link>
    </form>
  );
};
export default Login