import { useContext, useState, useEffect } from 'react';
import TaskContext from '../context/TaskContext';
import Card from './ui/Card';
import Button from './ui/Button';
import ProgressSelect from './progress/ProgressSelect';
import styles from './TaskForm.module.css';

const TaskForm = () => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [progress, setProgress] = useState('not started');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const { addTask, taskEdit, toggleEdit, updateTask } = useContext(TaskContext);

  useEffect(() => {
    if (taskEdit.edit === true) {
      setBtnDisabled(false);
      setTitle(taskEdit.item.title);
      setText(taskEdit.item.text);
      setProgress(taskEdit.item.progress);
    }
  }, [taskEdit]);

  const handleTextChange = e => {
    if (title.trim().length !== '' && text.trim().length !== '') {
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleTitleChange = e => {
    if (title.trim().length !== '' && text.trim().length !== '') {
      setBtnDisabled(false);
    }

    setTitle(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    // Constructs New Task Object
    if (text.trim().length !== '') {
      const newTask = {
        title,
        text,
        progress,
      };

      if (taskEdit.edit === true) {
        updateTask(taskEdit.item.id, newTask);
      } else {
        addTask(newTask);
      }

      setTitle('');
      setText('');
      setBtnDisabled(true);
    }
  };

  return (
    <Card cname='mb-big'>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.formHeading}>
          <h2>What are your main tasks for today?</h2>
        </div>

        <ProgressSelect select={progress => setProgress(progress)} />

        <div className={styles['input-group']}>
          <input
            onChange={handleTitleChange}
            type='title'
            placeholder='Enter task title...'
            value={title}
            required
          />

          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Enter task description...'
            value={text}
            required
          />
          <Button type='submit' isDisabled={btnDisabled}>
            {!toggleEdit ? 'Create Task' : 'Update Task'}
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default TaskForm;
