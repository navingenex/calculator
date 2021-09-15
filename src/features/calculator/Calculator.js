import React, { useState } from "react";
import ResultRow from "./resultRow";
import Button from "./button";
import { useSelector, useDispatch } from "react-redux";

import { setResult, del, selectResult } from "./calculatorSlice";
const Calculator = () => {
  const [expression, setExpression] = useState("");
  // const [result, setResult] = useState("");
  // useEffect(() => {}, [expression, result]);
  const result = useSelector(selectResult);
  const dispatch = useDispatch();
  const handleDefault = (value) => {
    if (result) {
      // getting result valu for further calculation
      let exp = result;
      setExpression(result + value);
      dispatch(setResult(""));
    } else {
      let exp = expression;
      setExpression(expression + value);
    }
  };
  const handleClick = (event) => {
    // get the value from the target element (button)
    const value = event.target.innerHTML;
    switch (value) {
      case "=": {
        // if it's an equal sign, use the eval module
        // to evaluate the expression ,convert the result
        // (in number) to String
        if (expression !== "") {
          var ans = "";
          try {
            ans = eval(expression);
          } catch (err) {
            dispatch(setResult("Math Error"));
          }
          if (ans === undefined) dispatch(setResult("Math Error"));
          // update result in our state.
          else {
            // setResult(ans);
            // setExpression("");
            dispatch(setResult(ans));
            setExpression("");
          }
        }
        break;
      }
      case "Clr": {
        // if it's the Clears sign, just clean our
        // expression and result in the state
        // setResult("");
        dispatch(del(""));
        setExpression("");
        break;
      }
      case "Del": {
        var str = expression;
        str = str.substr(0, str.length - 1);
        setExpression(str);
        break;
      }
      default: {
        // for every other command, update the answer in the state
        handleDefault(value);

        break;
      }
    }
  };

  return (
    <>
      {/* expression and result will be display here */}
      <ResultRow expression={expression} result={result} />
      <div
        style={{
          display: "flex",
          border: "1px solid #747474",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Button handleClick={handleClick} label={"7"} />
          <Button handleClick={handleClick} label={"4"} />
          <Button handleClick={handleClick} label={"1"} />
          <Button handleClick={handleClick} label={"0"} />
        </div>
        <div>
          <Button handleClick={handleClick} label={"8"} />
          <Button handleClick={handleClick} label={"5"} />
          <Button handleClick={handleClick} label={"2"} />
          <Button handleClick={handleClick} label={"."} />
        </div>
        <div>
          <Button handleClick={handleClick} label={"9"} />
          <Button handleClick={handleClick} label={"6"} />
          <Button handleClick={handleClick} label={"3"} />
          <Button handleClick={handleClick} label={"/"} />

          {/* <Button handleClick={handleClick} label={"%"} /> */}
        </div>
        <div>
          <Button handleClick={handleClick} label={"*"} />
          <Button handleClick={handleClick} label={"-"} />
          <Button handleClick={handleClick} label={"+"} />
          <Button handleClick={handleClick} label={"Del"} />
        </div>
        <div>
          <Button handleClick={handleClick} label={"Clr"} />
          <Button handleClick={handleClick} height="154px" label={"="} />
        </div>
      </div>
    </>
  );
};
export default Calculator;
