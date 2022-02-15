import { FaTrashAlt } from 'react-icons/fa';
import Card from './ui/Card';
import styles from './TaskItem.module.css';

const TaskItem = ({ item, deleteTask }) => {
  let progressColor;

  if (item.progress === 'not started') {
    progressColor = '#D32F2F';
  } else if (item.progress === 'in progress') {
    progressColor = '#F57C00';
  } else {
    progressColor = '#4CAF50';
  }
  return (
    <Card reverse={false}>
      <div className={styles.task}>
        <div
          className={styles.progressDisplay}
          style={{ backgroundColor: progressColor }}
        >
          {item.progress}
        </div>
        <div className={styles.textDisplay}>{item.text}</div>
        <button className={styles.close} onClick={() => deleteTask(item.id)}>
          <FaTrashAlt color='#D32F2F' />
        </button>
      </div>
    </Card>
  );
};
export default TaskItem;
