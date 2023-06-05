const Label = ({ text }: { text: string }) => {
  return <label className="label">{text}</label>;
};

const Header = ({ text }: { text: string }) => {
  return <h1>{text}</h1>;
};

const Content = ({
  text,
  style = {}
}: {
  text: string | number;
  style?: any;
}) => {
  return (
    <span className="textContent" style={style}>
      {text}
    </span>
  );
};

const Unit = ({
  symbol,
  number = 1,
  symbolStyle = {}
}: {
  symbol: string;
  number?: number;
  symbolStyle?: any;
}) => {
  return (
    <div className="unitContainer">
      <span style={{ ...symbolStyle }}>{symbol}</span>
      {number > 1 ? <span className="unitNumber">{number}</span> : null}
    </div>
  );
};

export { Content, Header, Label, Unit };
