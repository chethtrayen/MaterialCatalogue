import { colorValidation } from '../utils/validate';

const ColorPreview = ({
  color,
  size = 40,
  style = {}
}: {
  color: string;
  size?: number;
  style?: any;
}) => {
  // Only render valid colors
  const isValidHex = colorValidation(color);
  const placeholderColor = 'rgba(255,255,255, 0.1)';

  return (
    <div
      className="colorPreview"
      style={{
        backgroundColor: isValidHex ? color : placeholderColor,
        width: `${size}px`,
        height: `${size}px`,
        ...style
      }}
    />
  );
};

export default ColorPreview;
