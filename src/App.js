import { v4 as uuidv4 } from 'uuid'; // Generates Unique IDs
import { useState } from 'react';

import Header from './components/header/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskData from './data/FeedbackData';

function App() {
  const [task, setTask] = useState(TaskData);

  const addTaskHandler = newTask => {
    newTask.id = uuidv4();
    setTask([newTask, ...task]);
  };

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTask(task.filter(item => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <TaskForm addTask={addTaskHandler} />
        <TaskList task={task} deleteTask={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
