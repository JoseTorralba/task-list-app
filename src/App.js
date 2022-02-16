import Header from './components/header/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <Header />
      <div className='container'>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
