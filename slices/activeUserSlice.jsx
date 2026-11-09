import { createSlice } from "@reduxjs/toolkit";

export const activeUserSlice = createSlice({
  name: "counter",
  initialState: {
    value: null,
  },
  reducers: {
    activeuser: ({state, actions}) => {
      console.log(state.value)
      console.log(actions.payload)
    },


    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});
export const { increment } = activeUserSlice.actions;

export default activeUserSlice.reducer;
