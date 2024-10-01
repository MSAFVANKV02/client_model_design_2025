import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/userSide/UserAuthSlice"

export const store = configureStore({
    reducer: {
      user: authReducer,
    },
    devTools: import.meta.env.MODE !== "production",
  });

  export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
