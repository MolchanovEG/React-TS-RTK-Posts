import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../models/Post";

const initialState: IPost = {
  userId: -1,
  id: -1,
  title: "",
  body: "",
};

export const postState = createSlice({
  name: "postState",
  initialState,
  reducers: {
    put(state, action: PayloadAction<IPost>) {
      state.userId = action.payload.userId;
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.body = action.payload.body;
    },
  },
});

export default postState.reducer;
