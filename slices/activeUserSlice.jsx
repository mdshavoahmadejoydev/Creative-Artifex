import { createSlice } from "@reduxjs/toolkit";

export const activeUserSlice = createSlice({
  name: "activeuser",
  initialState: {
    value: localStorage.getItem("activeuser")
      ? JSON.parse(localStorage.getItem("activeuser"))
      : null,
  },
  reducers: {
    activeuser: (state, actions) => {
      state.value = actions.payload;
    },

    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});
export const { activeuser } = activeUserSlice.actions;

export default activeUserSlice.reducer;
