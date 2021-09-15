import React from "react";

const Result = ({ value, height }) => {
  return (
    <>
      <input
        style={{
          width: "100%",
          border: 0,
          width: "100%",
          border: "0px",
          background: "#585858",
          color: "#fff",
          height: "30px",
          fontSize: "18px",
        }}
        type="text"
        value={value}
        readOnly
      />
    </>
  );
};

export default Result;
