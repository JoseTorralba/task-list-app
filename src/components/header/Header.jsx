import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  const modeHandler = () => setDarkMode(prevState => !prevState);

  let headerStyles;
  if (!darkMode) {
    headerStyles = {
      backgroundColor: '#00796b',
    };
  } else {
    headerStyles = {
      backgroundColor: '#363636',
    };
  }

  return (
    <header className={styles.header} style={headerStyles}>
      <h2>Task List App</h2>

      {!darkMode ? (
        <FaMoon onClick={modeHandler} />
      ) : (
        <FaSun onClick={modeHandler} />
      )}
    </header>
  );
};

export default Header;
