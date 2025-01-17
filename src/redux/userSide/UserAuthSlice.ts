import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store"; // Assuming your store is in ../store
import { IKycProps, IUserProps } from "@/types/userTypes";
import { Current_User_Api } from "@/services/user_side_api/auth/route_url";

// Define the shape of your state
interface AuthState {
  user: IUserProps | null;
  userKyc: IKycProps | null;
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
  userKyc: null,
  token: null,
  isLoading: false,
  isUserLogged: false,
  error: null,
};

// Async thunk for login
export const fetchAdminDetails = createAsyncThunk(
  "user/fetchAdminDetails",
  async (_, { rejectWithValue }) => {
    try {
      const response = await Current_User_Api();
      // console.log(response);

      if (response.status == 200 || response.data.success === true) {
        return response.data;
      } else {
        return rejectWithValue("Failed to fetch admin details");
      }
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data : "Network error"
      );
    }
  }
);

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
      .addCase(fetchAdminDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchAdminDetails.fulfilled,
        (state, action: PayloadAction<{ user: IUserProps; kyc: IKycProps; token: string;}>) => {
          state.isLoading = false;
          state.isUserLogged = true;
          state.user = action.payload.user;
          state.userKyc = action.payload.kyc;
          state.token = action.payload.token;
        }
      )
      .addCase(fetchAdminDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isUserLogged = false;

        // Check if payload is a string or an object and handle accordingly
        if (typeof action.payload === "string") {
          state.error = action.payload; // String error message
        } else if (action.payload && typeof action.payload === "object") {
          // Cast payload to 'any' to safely access 'data'
          const errorPayload = action.payload as any;
          state.error = errorPayload?.data?.message || "Unknown error";
        } else {
          state.error = "Unknown error";
        }
      });
  },
});

export const { logoutUser, setUserData } = authSlice.actions;

export default authSlice.reducer;

// Selector to get the auth state
export const selectAuth = (state: RootState) => state.auth;
