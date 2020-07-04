import React from "react";
import "../css/Option.css";

const Option = ({ changePrice }) => {
  const handelChange = (event) => {
    changePrice(event.target.checked);
  };
  return (
    <div className="Option">
      <p>Anually</p>
      <input type="checkbox" onChange={handelChange} />
      <p>Monthly</p>
    </div>
  );
};

export default Option;
