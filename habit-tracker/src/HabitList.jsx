import React, { useEffect, useState } from 'react'; 
import { db } from './firebaseConfig'; 
import { collection, query, where, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore'; 
import './HabitList.css';

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

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'habits', id));
    };

    const toggleCompletion = async (habit) => {
        const updatedCompleted = !habit.completed;
        const updatedCount = updatedCompleted ? habit.completionCount + 1 : habit.completionCount;
        try {
            await updateDoc(doc(db, 'habits', habit.id), {
                completed: updatedCompleted,
                completionCount: updatedCount,
            });
        } catch (error) {
            console.error("Error updating habit completion: ", error);
        }
    };

    return (
        <ul className="habit-list">
            {habits.map(habit => (
                <li key={habit.id} className="habit-item">
                    <div className="habit-container">
                        <label className="habit-label">
                            <input 
                                type="checkbox" 
                                checked={habit.completed} 
                                onChange={() => toggleCompletion(habit)} 
                            />
                            <span className="habit-name">{habit.name}</span>
                        </label>
                        {/* <span className="habit-name">{habit.name}</span> */}
                        <div className="button-container">
                            <button onClick={() => handleDelete(habit.id)}>Delete</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default HabitList;