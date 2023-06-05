import { MouseEventHandler } from 'react';

interface ButtonProps {
  text: string;
  onClick: MouseEventHandler;
  style?: any;
}

const Button = ({ text, onClick, style = {} }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
