
import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food shopping',
        reminder: false,
    },
]);

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/> : 'No tasks for today'}
    </div>
  )
}

export default App;
