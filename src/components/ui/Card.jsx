import styles from './Card.module.css';
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';

const Card = ({ children, cname }) => {
  const { darkMode } = useContext(TaskContext);

  return (
    <div
      className={`${styles.card} ${cname}`}
      style={{
        backgroundColor: darkMode ? ' rgba(0, 0, 0, 0.4)' : '#fff',
        color: darkMode ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  );
};
export default Card;
