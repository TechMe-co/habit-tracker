import React, { useState } from 'react'; 
import { auth } from './firebaseConfig'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import './App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(''); 

    try {
      await signInWithEmailAndPassword(auth, email, password); 
    } catch (error) {
      setError(error.message); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>} 
    </form>
  );
};

export default Login;