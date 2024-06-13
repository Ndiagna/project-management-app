import React, { Form } from '@remix-run/react';
import { useState } from 'react';
import { ActionFunction, redirect, LinksFunction } from '@remix-run/node';
import stylesUrl from 'app/styles/register.css';

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (password !== confirmPassword) {
    return { formError: 'Passwords do not match' };
  }

  // Validation côté serveur
  const response = await fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    return redirect('/login');
  } else {
    // Gérer les erreurs
    const errorData = await response.json();
    return { formError: errorData.message }; // Si le serveur renvoie un message d'erreur
  }
};

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [formError, setFormError] = useState<string | null>(null);

  return (
    
    <div className="container">
      
      {formError && <div className="error">{formError}</div>}
      <Form method="post" className="loginForm">
      <h2 className="title">Registere</h2>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input"
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="input"
        />
        <button type="submit" className="button">Register</button>
      </Form>
    </div>
  );
};

export default Register;
