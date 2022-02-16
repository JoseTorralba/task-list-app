import { useState, useContext, useEffect } from 'react';
import TaskContext from '../../context/TaskContext';
import styles from './ProgressSelect.module.css';

const ProgressSelect = ({ select }) => {
  const [selected, setSelected] = useState('not started');

  const { taskEdit } = useContext(TaskContext);

  useEffect(() => {
    setSelected(taskEdit.item.progress);
  }, [taskEdit]);

  const handleChange = e => {
    setSelected(e.currentTarget.value);
    select(e.currentTarget.value);
  };

  return (
    <ul className={styles.progress}>
      <li>
        <input
          type='radio'
          id='progress1'
          name='progress'
          value='not started'
          onChange={handleChange}
          checked={selected === 'not started'}
          required
        />
        <label htmlFor='progress1'>Not Started</label>
      </li>
      <li>
        <input
          type='radio'
          id='progress2'
          name='progress'
          value='in progress'
          onChange={handleChange}
          checked={selected === 'in progress'}
        />
        <label htmlFor='progress2'>In Progress</label>
      </li>
      <li>
        <input
          type='radio'
          id='progress3'
          name='progress'
          value='complete'
          onChange={handleChange}
          checked={selected === 'complete'}
        />
        <label htmlFor='progress3'>Complete</label>
      </li>
    </ul>
  );
};
export default ProgressSelect;
