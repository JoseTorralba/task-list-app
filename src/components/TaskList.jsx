import { motion, AnimatePresence } from 'framer-motion';
import TaskItem from './TaskItem';
import Card from './ui/Card';
import styles from './TaskList.module.css';

const TaskList = ({ task, deleteTask }) => {
  if (!task || task.length === 0) {
    return (
      <Card>
        <p>No Tasks Yet...</p>
      </Card>
    );
  }

  return (
    <div className={styles.taskList}>
      <AnimatePresence>
        {task.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TaskItem key={item.id} item={item} deleteTask={deleteTask} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
export default TaskList;
