import React, { useState, useEffect } from 'react'; 
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Register from './Register.jsx'; 
import Login from './Login.jsx'; 
import HabitForm from './HabitForm.jsx'; 
import HabitList from './HabitList.jsx'; 
import './App.css';

const App = () => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 

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
                <>
                    <h1>Welcome, {user.email}!</h1>
                    <button onClick={handleLogout}>Logout</button>
                    <HabitForm userId={user.uid} /> {}
                    <HabitList userId={user.uid} /> {}
                </>
            ) : (
                <div>
                    <h2>Please Login or Create a new account</h2>
                    <Login />
                    <Register />
                </div>
            )}
        </div>
    );
};

export default App;
