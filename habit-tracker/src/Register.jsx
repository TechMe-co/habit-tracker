import React, { useState } from 'react'; 
import { auth } from './firebaseConfig'; 
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import './App.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(''); 

    try {
      await createUserWithEmailAndPassword(auth, email, password); 
    } catch (error) {
      setError(error.message); 
    }
  };

  return (
    <form onSubmit={handleSubmit}> {}
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
      <button type="submit">Sign Up</button> {}
      {error && <p>{error}</p>} {}
    </form>
  );
};

export default Register;