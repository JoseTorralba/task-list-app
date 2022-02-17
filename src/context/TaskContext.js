import { v4 as uuidv4 } from 'uuid'; // Generates Unique IDs
import { createContext, useState } from 'react';

const TaskContext = createContext();

// Provider
export const TaskProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const modeHandler = () => setDarkMode(prevState => !prevState);

  const [toggleEdit, setToggleEdit] = useState(false);

  const [task, setTask] = useState([
    {
      id: 1,
      title: 'Task 1',
      text: 'This is your 1st Task. You have not started it yet',
      progress: 'not started',
    },
    {
      id: 2,
      title: 'Task 2',
      text: 'This is your 2nd Task. It is currently in progress',
      progress: 'in progress',
    },
    {
      id: 3,
      title: 'Task 3',
      text: 'This is your 3rd Task. You have completed it!',
      progress: 'complete',
    },
  ]);

  const [taskEdit, setTaskEdit] = useState({
    item: {},
    edit: false,
  });

  // Creates a Task
  const addTask = newTask => {
    newTask.id = uuidv4();
    setTask([newTask, ...task]);
  };

  // Deletes a Task
  const deleteTask = id => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTask(task.filter(item => item.id !== id));
    }
  };

  // Updated Task Item
  const updateTask = (id, updItem) => {
    setTask(
      task.map(item => (item.id === id ? { ...item, ...updItem } : item))
    );

    setToggleEdit(false);
  };

  // Set Task Item to be edited
  const editTask = item => {
    setToggleEdit(true);
    setTaskEdit({
      item,
      edit: true,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        taskEdit,
        darkMode,
        toggleEdit,
        deleteTask,
        addTask,
        editTask,
        updateTask,
        modeHandler,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
