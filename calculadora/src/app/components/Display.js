import React from 'react';
import styles from './Display.module.css';

const Display = ({ value, operation }) => {
  return (
    <div className={styles.calcScreen}>
      <div className={styles.calcOperation}>{operation}</div>
      <div className={styles.calcTyped} data-testid="display">{value}<span className="blink-me">_</span></div>
    </div>
  );
};

export default Display;
