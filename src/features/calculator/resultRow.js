import React from "react";
import Result from "./result";

const ResultRow = (props) => {
  return (
    <>
      {/* user expression  */}
      <Result value={props.expression} />
      {/* result after calulation of expression */}
      <Result value={props.result} />
    </>
  );
};

export default ResultRow;
