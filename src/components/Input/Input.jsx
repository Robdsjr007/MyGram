import { useState } from 'react';
import styles from './Input.module.css';

const Input = ({ type, placeholder }) => {
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className={styles.inputContainer}>
      <label className={`${styles.label} ${hasValue ? styles.shrink : ''}`}>
        {placeholder}
      </label>
      <input
        className={styles.input}
        type={type}
        onChange={(e) => setHasValue(e.target.value !== '')}
        onBlur={(e) => setHasValue(e.target.value !== '')}
        onFocus={(e) => setHasValue(true)}
        required
        autoComplete='off'
      />
    </div>
  );
};

export default Input;
