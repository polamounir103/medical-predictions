import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true, // Start as true to display loading animation initially
};

const firstLoadSlice = createSlice({
  name: "firstLoad",
  initialState,
  reducers: {
    LoadStart(state) {
      state.isLoading = true;
    },
    firstLoadSuccess(state) {
      state.isLoading = false; // Stop loading after the animation
    },
  },
});

// Exporting actions to trigger in the components
export const { LoadStart, firstLoadSuccess } = firstLoadSlice.actions;

// Exporting the reducer to be included in the store
export default firstLoadSlice.reducer;
