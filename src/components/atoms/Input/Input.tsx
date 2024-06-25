import React from 'react';
import './Input.css';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      className="input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;




