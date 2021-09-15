import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: "",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result += action.payload;
    },
    del: (state) => {
      state.result = "";
    },
    clr: (state, action) => {
      state.result = action.payload;
    },
  },
});
export const { setResult, del, clr, expression } = calculatorSlice.actions;
export const selectResult = (state) => state.calculator.result;

export default calculatorSlice.reducer;
