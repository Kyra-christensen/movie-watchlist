import React, { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>AuthPage</div>
  );
}
