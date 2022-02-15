import { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import ProgressSelect from './progress/ProgressSelect';
import styles from './TaskForm.module.css';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [progress, setRating] = useState('not started');
  const [btnDisabled, setBtnDisabled] = useState(true);

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

      addTask(newTask);
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

        <ProgressSelect select={progress => setRating(progress)} />

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
            Create Task
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default TaskForm;
