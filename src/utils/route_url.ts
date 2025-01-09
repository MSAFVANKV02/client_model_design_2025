import axios from "axios";
import { RESEND_OTP_USER, SEND_OTP_REGISTER_USER, SUBMIT_USER_DETAILS_REGISTRATION, UPLOAD_USER_KYC, VERIFY_OTP_REGISTER_USER } from "./urlPath";

const API = axios.create({
  baseURL: "https://gateway.ayaboo.com",
  // headers: {
  //     'Authorization': 'Bearer YOUR_API_TOKEN',
  //     'Content-Type': 'application/json',
  // },
});

type IFormData = {
    name: string;
    shopName?: string;
    pinCode?: string;
    policyVerified: boolean;
    isWhatsappApproved: boolean;
  };


// 1.  Registration =================================================
export const SendOtp_Register_Api = async (data: { mobile: string }) =>
  await API.post(SEND_OTP_REGISTER_USER, data, { withCredentials: true });

export const Verify_Register_Api = async (data: { mobile: string|null,otp:string }) =>
    await API.post(VERIFY_OTP_REGISTER_USER, data, { withCredentials: true });

export const Resend_Otp_Api = async (data: { mobile: string|null }) =>
    await API.post(RESEND_OTP_USER, data, { withCredentials: true });

export const User_Details_Registration_Api = async (data: IFormData & { mobile: string|null }) =>
    await API.post(SUBMIT_USER_DETAILS_REGISTRATION, data, { withCredentials: true });


// 2, Kyc Submission After Registration =================================
export const Kyc_Submit_Api = async  (data: FormData)  =>
    await API.post(UPLOAD_USER_KYC, data, { withCredentials: true });
