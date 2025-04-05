import React, { useEffect, useState } from 'react'; 
import { db } from './firebaseConfig'; 
import { collection, query, where, onSnapshot, deleteDoc, doc } from 'firebase/firestore'; 
import './HabitList.css';

const HabitList = ({ userId }) => { 
    const [habits, setHabits] = useState([]); 
    const [editing, setEditing] = useState(null);
    const [habitName, setHabitName] = useState('');

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

    // const handleEdit = (habit) => {
    //     setEditing(habit.id);
    //     setHabitName(habit.name);
    // };

    // const handleUpdate = async (id) => {
    //     if (habitName.trim()) {
    //         await updateDoc(doc(db, 'habits', id), {
    //             name: habitName,
    //         });
    //         setEditing(null);
    //         setHabitName('');
    //     }
    // };

    const toggleCompletion = async (habit) => {
        const updatedCompleted = !habit.completed;
        const updatedCount = updatedCompleted ? habit.completionCount + 1 : habit.completionCount;

        await updateDoc(doc(db, 'habits', habit.id), {
            completed: updatedCompleted,
            completionCount: updatedCount,
        });
    };

    return (
        <ul>
            {habits.map(habit => ( 
                <li key={habit.id}>
                    {editing === habit.id ? (
                        <div>
                            <input 
                                type="text" 
                                value={habitName} 
                                onChange={(e) => setHabitName(e.target.value)} 
                                placeholder="Update habit" 
                                required 
                            />
                            {/* <button onClick={() => handleUpdate(habit.id)}>Update</button>
                            <button onClick={() => setEditing(null)}>Cancel</button> */}
                        </div>
                    ) : (
                        <div>
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={habit.completed} 
                                    onChange={() => toggleCompletion(habit)} 
                                />
                                {habit.name}
                            </label>
                            {/* <button onClick={() => handleEdit(habit)}>Edit</button> */}
                            {/* <button onClick={() => handleDelete(habit.id)}>Delete</button>  */}
                            <div className="button-container">
                                {/* <button onClick={() => handleEdit(habit)}>Edit</button> */}
                                <button onClick={() => handleDelete(habit.id)}>Delete</button>
                            </div>
                        </div>
                     )}
                </li>
            ))}
        </ul>
    );
};

export default HabitList;