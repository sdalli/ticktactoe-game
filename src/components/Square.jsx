const Square = ({ value, children }) => {
  console.log(value);
  return (
    <div>
      {value}
      <h5> Children will be rendered below</h5>
      <div> {children}</div>
      <div>{false}</div>
    </div>
  );
};

export default Square;
