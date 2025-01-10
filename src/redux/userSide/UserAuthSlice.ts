import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store"; // Assuming your store is in ../store
import { IUserProps } from "@/types/userTypes";

// Define the shape of your state
interface AuthState {
  user: IUserProps | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  isUserLogged: boolean;
}

// Define the User type
// interface User {
//   id: number;
//   username: string;
// }

// Initial state
const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  isUserLogged: false,
  error: null,
};

// Async thunk for login
export const login = createAsyncThunk<
  { user: IUserProps; token: string }, // Return type (success response)
  { username: string; password: string }, // Argument type (input to thunk)
  { rejectValue: string } // Rejected action type (in case of error)
>("auth/login", async ({ username, password }, thunkAPI) => {
  try {
    // Simulating an API call (replace with real API logic)
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      return thunkAPI.rejectWithValue(data.message || "Failed to login");
    }

    return data; // Assuming data contains { user, token }
  } catch (error) {
    console.log(error);

    return thunkAPI.rejectWithValue("Failed to login");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isUserLogged = false;
    },
    setUserData: (state, action: PayloadAction<IUserProps>) => {
      state.user = action.payload;
      state.isUserLogged = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ user: IUserProps; token: string }>) => {
          state.isLoading = false;
          state.isUserLogged = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      )
      .addCase(
        login.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.isUserLogged = false;
          state.error = action.payload ?? "Unknown error";
        }
      );
  },
});

export const { logoutUser, setUserData } = authSlice.actions;

export default authSlice.reducer;

// Selector to get the auth state
export const selectAuth = (state: RootState) => state.auth;
