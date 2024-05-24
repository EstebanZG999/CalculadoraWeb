import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, onClick }) => {
  const buttonClass = label === 'C' ? styles.buttonC : styles.buttonL;

  return (
    <div 
      className={`${styles.button} ${buttonClass}`} 
      onClick={() => onClick(label)}
      data-key={label}
    >
      {label}
    </div>
  );
};

export default Button;