import { configureStore } from "@reduxjs/toolkit";

import authReducers from "./slice/userSlice";
import firstLoadReducer from "./slice/firstLoadSlice";
import dirReducer from "./slice/dirSlice";
import newsReducer from "./slice/newsSlice";
const store = configureStore({
  reducer: {
    firstLoad: firstLoadReducer,
    auth: authReducers,
    dir: dirReducer,
    news: newsReducer,
  },
});

export default store;
