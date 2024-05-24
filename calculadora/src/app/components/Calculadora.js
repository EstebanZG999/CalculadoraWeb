import React, { useState, useEffect } from 'react';
import Button from './Button';
import Display from './Display';
import styles from './Calculator.module.css';

const Calculadora = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operation, setOperation] = useState('');
  const [currentOperator, setCurrentOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [isNextClear, setIsNextClear] = useState(false);
  const [fullOperation, setFullOperation] = useState('');

  useEffect(() => {
    const blinker = () => {
      const blink = document.querySelector('.blink-me');
      if (blink) {
        blink.style.opacity = blink.style.opacity === '1' ? '0' : '1';
      }
    };
    const interval = setInterval(blinker, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      const validKeys = '0123456789+-*/.=cC';
      if (validKeys.includes(key)) {
        handleButtonClick(key === '*' ? 'x' : key === 'c' || key === 'C' ? 'C' : key === 'Enter' ? '=' : key);
        highlightButton(key);
      }
    };

    const highlightButton = (key) => {
      const keyMap = {
        '/': '/',
        '*': 'x',
        '-': '-',
        '+': '+',
        '.': '.',
        '=': '=',
        'Enter': '=',
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        'c': 'C',
        'C': 'C'
      };

      const button = document.querySelector(`div[data-key="${keyMap[key] || key}"]`);
      if (button) {
        button.classList.add(styles.active);
        setTimeout(() => button.classList.remove(styles.active), 200);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleButtonClick = (value) => {
    console.log(`Button clicked: ${value}`); 
    if (!isNaN(value) || value === '.') {
      if (isNextClear) {
        setDisplayValue(value);
        setIsNextClear(false);
      } else {
        setDisplayValue((prev) => {
          const newValue = prev === '0' ? value : prev + value;
          console.log(`New display value: ${newValue}`); 
          return newValue.length > 9 ? prev : newValue;
        });
      }
      setFullOperation((prev) => {
        const newOperation = prev + value;
        return newOperation.length > 9 ? prev : newOperation; 
      });
    } else if (value === 'C') {
      setDisplayValue('0');
      setOperation('');
      setCurrentOperator(null);
      setPreviousValue(null);
      setFullOperation(''); 
    } else if (value === '+/-') {
      setDisplayValue((prev) => {
        if (prev === '0' || prev === 'ERROR') return prev;
        if (prev[0] === '-') {
          setFullOperation(fullOperation.slice(1));
          return prev.slice(1);
        } else {
          setFullOperation('-' + fullOperation);
          return '-' + prev;
        }
      });
    } else if (value === '=') {
      if (currentOperator && previousValue !== null) {
        calculateResult();
        setCurrentOperator(null);
        setOperation('');
      }
    } else {
      if (currentOperator && previousValue !== null) {
        calculateResult(true); 
      } else {
        setPreviousValue(parseFloat(displayValue));
      }
      setCurrentOperator(value);
      setOperation(value);
      setIsNextClear(true);
      setFullOperation((prev) => {
        const newOperation = prev + value;
        return newOperation.length > 9 ? prev : newOperation; 
      });
    }
  };

  const calculateResult = (isChainingOperation = false) => {
    let result;
    const currentValue = parseFloat(displayValue);

    switch (currentOperator) {
      case '+':
        result = previousValue + currentValue;
        break;
      case '-':
        result = previousValue - currentValue;
        break;
      case 'x':
        result = previousValue * currentValue;
        break;
      case '/':
        result = previousValue / currentValue;
        break;
      default:
        return;
    }

    console.log(`Calculation result: ${result}`); 

    if (result < 0 || isNaN(result)) {
      if (result === 0) {
        setDisplayValue('0');
        setPreviousValue(0);
      } else {
        setDisplayValue('ERROR');
        setPreviousValue(null);
        setFullOperation(''); 
      }
    } else if (result > 999999999) {
      setDisplayValue('ERROR');
      setPreviousValue(null);
      setFullOperation(''); 
    } else {
      setDisplayValue(String(result).slice(0, 9));
      setPreviousValue(result);
      setIsNextClear(true);
      if (!isChainingOperation) {
        setFullOperation(String(result).slice(0, 9)); 
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.calcBody}>
        <Display value={displayValue} operation={fullOperation} /> 
        {[
          ['C', '+/-', '%', '/'],
          ['7', '8', '9', 'x'],
          ['4', '5', '6', '-'],
          ['1', '2', '3', '+'],
          ['.', '0', '<', '='],
        ].map((row, i) => (
          <div key={i} className={styles.calcButtonRow}>
            {row.map((label) => (
              <Button key={label} label={label} onClick={handleButtonClick} data-key={label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculadora;
