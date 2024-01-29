import { configureStore } from "@reduxjs/toolkit";

//SLICE IMPORT
import ToolbarReducer from "@/redux/features/toolbar";

export const store = configureStore({
  reducer: {
    toolbar: ToolbarReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
