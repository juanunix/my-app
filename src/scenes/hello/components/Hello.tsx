// src/components/Hello.tsx
import './Hello.css';

import * as React from 'react';



export interface IProps {
  name: string;
  enthusiasmLevel: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;

// helpers

