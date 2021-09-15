import React from "react";
import Result from "./result";

const ResultRow = (props) => {
  return (
    <>
      <Result value={props.expression} />
      <Result value={props.result} />
    </>
  );
};

export default ResultRow;
