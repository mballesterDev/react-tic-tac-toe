import "./Square.css";

const Square = ({ value, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      <span>{value}</span>
    </div>
  );
};

export default Square;
