import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the KYC details
interface KycDetails {
  businessName: string;
  emailId: string;
  buildingName: string;
  street: string;
  post: string;
  pinCode: string;
  state: string;
  country: string;
}

// Define the initial state of the KYC details with default values
const initialState: KycDetails = {
  businessName: '',
  emailId: '',
  buildingName: '',
  street: '',
  post: '',
  pinCode: '',
  state: '',
  country: '',
};

const kycSlice = createSlice({
  name: "kyc",
  initialState,
  reducers: {
    saveKycDetails(state, action: PayloadAction<KycDetails>) {
      return action.payload; // Save the KYC details to the state
    },
    clearKycDetails(state) {
      return initialState; // Reset state to initial values
    },
  },
});

// Export the actions
export const { saveKycDetails, clearKycDetails } = kycSlice.actions;

// Export the reducer
export default kycSlice.reducer;
