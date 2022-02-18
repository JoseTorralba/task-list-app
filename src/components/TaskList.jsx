import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import TaskItem from './TaskItem';
import Card from './ui/Card';
import styles from './TaskList.module.css';
import TaskContext from '../context/TaskContext';

const TaskList = () => {
  const { task } = useContext(TaskContext);

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
        {task.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              translateY: 30,
            }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <TaskItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
export default TaskList;
