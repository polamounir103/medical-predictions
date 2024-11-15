import { configureStore } from "@reduxjs/toolkit";

import authReducers from "./slices/authSlice"; 
import firstLoadReducer from "./slices/firstLoadSlice";
const store = configureStore({
  reducer: {
    firstLoad: firstLoadReducer,
    auth: authReducers.reducer,
  },
});

export default store;
