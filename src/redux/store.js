import { configureStore } from "@reduxjs/toolkit";

import firstLoadReducer from "./slices/firstLoadSlice";
const store = configureStore({
  reducer: {

    firstLoad : firstLoadReducer
  },
});

export default store;