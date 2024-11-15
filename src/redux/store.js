import { configureStore } from "@reduxjs/toolkit";

import firstLoadReducer from "./slices/firstLoadSlice";
import authReducer from "./slices/authSlice";
const store = configureStore({
  reducer: {
    firstLoad: firstLoadReducer,
    auth: authReducer,
  },
});

export default store;
