import styles from './Divider.module.css';

const Divider = () => {
  return (
    <div className={styles.dividerContainer}>
      <div className={styles.line}></div>
      <span className={styles.text}>OU</span>
      <div className={styles.line}></div>
    </div>
  );
};

export default Divider;
