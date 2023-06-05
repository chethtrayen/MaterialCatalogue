interface InputProps {
  onChange: (value: any) => void;
  value: string | number;
  type?: string;
  placeholder?: string;
}

const Input = ({
  onChange,
  value,
  type = 'text',
  placeholder = ''
}: InputProps) => {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      className="input"
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
