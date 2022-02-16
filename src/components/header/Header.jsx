import { FaSun, FaMoon } from 'react-icons/fa';
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import styles from './Header.module.css';

const Header = () => {
  const { darkMode, modeHandler } = useContext(TaskContext);

  !darkMode
    ? (document.body.style.backgroundColor = '#f7f7f8')
    : (document.body.style.backgroundColor = '#2e2e2e');

  return (
    <header
      className={`${styles.header} ${
        !darkMode ? styles.headerLight : styles.headerDark
      }`}
    >
      <h2>Task List App</h2>

      {!darkMode ? (
        <FaMoon className={styles.icon} onClick={modeHandler} />
      ) : (
        <FaSun className={styles.icon} onClick={modeHandler} />
      )}
    </header>
  );
};

export default Header;
