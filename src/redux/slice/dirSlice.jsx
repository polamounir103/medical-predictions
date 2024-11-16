import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dir: "rtl", // Default direction
};

const dirSlice = createSlice({
  name: "dir",
  initialState,
  reducers: {
    setDir: (state, action) => {
      state.dir = action.payload; // Change the direction
    },
  },
});

export const { setDir } = dirSlice.actions;
export default dirSlice.reducer;
