import React, { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signIn(email, password);
    setCurrentUser(user);
    setEmail('');
    setPassword('');
  }

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUp(email, password);
    setCurrentUser(user);
    setEmail('');
    setPassword('');
  }

  return (
    <div className='authpage'>
      <form className='auth-form'>
        <h1>Movie Watchlist</h1>
        <label>
          Email 
          <input required type="email" name="email" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password 
          <input required type="password" name="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="button" className='sign-in-button'onClick={handleSignIn}>Sign In</button>
        <button type="button" className='sign-up-button' onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}
