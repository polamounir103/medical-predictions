import { configureStore } from "@reduxjs/toolkit";

import authReducers from "./slice/userSlice";
import firstLoadReducer from "./slice/firstLoadSlice";
const store = configureStore({
  reducer: {
    firstLoad: firstLoadReducer,
    auth: authReducers,
  },
});

export default store;
