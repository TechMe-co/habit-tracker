import React, { useState, useEffect } from 'react'; 
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Register from './Register.jsx'; 
import Login from './Login.jsx'; 
import HabitForm from './HabitForm.jsx'; 
import HabitList from './HabitList.jsx'; 
import './App.css';
import './HabitList.css';
import Navbar from './Navbar';

const App = () => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [isLoginMode, setIsLoginMode] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user); 
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe(); 
    }, []);

    const handleLogout = async () => {
        await signOut(auth); 
    };

    if (loading) {
        return <p>Loading...</p>; 
    }

    return (
        <div>
            {user ? ( 
                <div>
                    <Navbar onLogout={handleLogout} />
                    <h1>Welcome, {user.email}!</h1>
                    <HabitForm userId={user.uid} /> 
                    <HabitList userId={user.uid} /> 
                </div>
            ) : (
                <div>
                    {isLoginMode ? (
                        <>
                            <h2>Login</h2>
                            <Login /> 
                            <p>
                                Don't have an account? 
                                <button onClick={() => setIsLoginMode(false)}>Sign Up</button>
                            </p>
                        </>
                    ) : (
                        <>
                            <h2>Create account</h2>
                            <Register /> 
                            <p>
                                Already have an account? 
                                <button onClick={() => setIsLoginMode(true)}>Login</button>
                            </p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
