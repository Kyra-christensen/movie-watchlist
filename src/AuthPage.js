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
    <div>AuthPage</div>
  );
}
