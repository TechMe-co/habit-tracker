import React, { useEffect, useState } from 'react'; 
import { db } from './firebaseConfig'; 
import { collection, query, where, onSnapshot, deleteDoc, doc } from 'firebase/firestore'; 

const HabitList = ({ userId }) => { 
    const [habits, setHabits] = useState([]); 

    useEffect(() => {
        const q = query(collection(db, 'habits'), where('userId', '==', userId)); 

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const habitsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setHabits(habitsData); 
        });

        return () => unsubscribe(); 
    }, [userId]); 

    // Function to handle deletion of a habit
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'habits', id)); 
    };

    return (
        <ul>
            {habits.map(habit => ( 
                <li key={habit.id}>
                    {habit.name} {}
                    <button onClick={() => handleDelete(habit.id)}>Delete</button> 
                </li>
            ))}
        </ul>
    );
};

export default HabitList;