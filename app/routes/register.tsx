import React, { Form } from '@remix-run/react';
import { useState } from 'react';
import { ActionFunction, redirect } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (password !== confirmPassword) {
    return { formError: 'Passwords do not match' };
  }

  // Implémentez l'enregistrement ici
  // Exemple :
  // const response = await fetch('/api/auth/register', {
  //   method: 'POST',
  //   body: JSON.stringify({ email, password }),
  //   headers: { 'Content-Type': 'application/json' }
  // });
  // if (response.ok) {
  //   return redirect('/login');
  // }

  return redirect('/login'); // Temporaire, ajustez selon votre logique d'enregistrement
};

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <div>
      <h2>Register</h2>
      <Form method="post">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button type="submit">Register</button>
      </Form>
    </div>
  );
};

export default Register;
