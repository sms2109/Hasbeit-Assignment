import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (label) => {
    if (label === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (label === 'C') {
      setInput('');
    } else {
      setInput(input + label);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {buttons.map((btn, index) => (
          <Button key={index} label={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
