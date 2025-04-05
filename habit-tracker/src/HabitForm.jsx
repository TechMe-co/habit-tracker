import React, { useState } from 'react'; 
import { db } from './firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore'; 

const HabitForm = ({ userId }) => { 
    const [habit, setHabit] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if (habit.trim()) {
            try {
                await addDoc(collection(db, 'habits'), {
                    name: habit,
                    userId: userId, 
                    createdAt: new Date() 
                });
                setHabit(''); 
            } catch (error) {
                console.error("Error adding habit: ", error); 
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}> {}
            <input 
                type="text" 
                value={habit} 
                onChange={(e) => setHabit(e.target.value)}
                placeholder="Add a new habit" 
                required 
            />
            <button type="submit">Add Habit</button> {}
        </form>
    );
};

export default HabitForm;