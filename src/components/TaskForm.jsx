import { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import ProgressSelect from './progress/ProgressSelect';
import styles from './TaskForm.module.css';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');
  const [progress, setRating] = useState('not started');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = e => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters long');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    // Constructs New Task Object
    if (text.trim().length > 10) {
      const newTask = {
        text,
        progress,
      };

      addTask(newTask);
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
            onChange={handleTextChange}
            type='text'
            placeholder='Enter a task...'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Create Task
          </Button>
        </div>

        {message && <div className={styles.message}>{message}</div>}
      </form>
    </Card>
  );
};
export default TaskForm;
