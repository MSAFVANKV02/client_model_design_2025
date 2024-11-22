import axios from "axios";
import { SendOtpLoginUser } from "@/utils/urlPath";
import { AxiosResponse } from "axios";

export interface OtpResponse {
  status: number;
  success?: boolean;
  data?: {
    success: boolean;
    message: string;
  };
}



export const userLoginSendOtp = async (
  mobile: string
): Promise<AxiosResponse<OtpResponse>> => {
  const response = await axios.post<OtpResponse>(SendOtpLoginUser, { mobile });
//   console.log(response, 'response in api page');
  
  return response; // Return the full Axios response
};

// =================================================================

// 2.
