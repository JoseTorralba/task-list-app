import styles from './Button.module.css';

const Button = ({ children, type, isDisabled }) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`${styles.btn} ${styles.btnPrimary}`}
    >
      {children}
    </button>
  );
};

export default Button;
