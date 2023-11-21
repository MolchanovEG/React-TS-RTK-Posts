import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postAPI } from "../services/PostService";
import { setupListeners } from "@reduxjs/toolkit/query";
import postReducer from "../services/PostSlice";

const rootReducer = combineReducers({
  [postAPI.reducerPath]: postAPI.reducer,
  postReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
});

export const setupStore = () => {
  return store;
};

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
