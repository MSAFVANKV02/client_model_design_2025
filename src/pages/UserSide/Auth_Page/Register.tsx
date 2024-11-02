import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PhoneInput, { CountryData } from "react-phone-input-2";
import { makeToast, makeToastError } from "@/utils/toaster";
import "react-phone-input-2/lib/style.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import { sendOtpRegisterUser } from "@/utils/urlPath";

// Define the Zod schema for phone number validation
const formSchema = z.object({
  mobile: z
    .string()
    .min(10, { message: "Phone number must be exactly 10 digits." }),
  mobile4OTP: z.string().min(1, { message: "Mobile number is required." }), // Add validation for mobile4OTP if necessary
});

interface FormData {
  mobile: string;
  mobile4OTP: string;
}

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobile: "",
      mobile4OTP: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const response = await axios.post(sendOtpRegisterUser, {
        mobile: data.mobile,
      });

      // console.log(response.data);

      if (response.status === 200) {
        const { user } = response.data; // Destructure user from response

        if (user) {
          // Check if user exists
          if (user.isVerified && user.isRegistered) {
            // If user is verified and registered
            if (user.kycApproved) {
              makeToast(`OTP sent to ${data.mobile4OTP}`);
              navigate(`/login`);
            } else if (!user.isKycCompleted) {
              makeToast(`OTP sent to ${data.mobile4OTP}`);
              navigate(`/kyc`);
            }else {
              makeToast(`OTP sent to ${data.mobile4OTP}`);
              navigate(`/kyc`);
            }
          } else if (user.isVerified) {
            // If user is verified but not registered
            makeToastError("Phone number already exists.");
            navigate(`/register/user-details?auth=${data.mobile}`);
          } else {
            // If user is not verified
            makeToast(`OTP sent to ${data.mobile4OTP}`);
            navigate(`/register/otp-verification?auth=${data.mobile}`);
          }
        } else {
          // Handle case where user is not found or user object is not returned
          makeToastError("Unexpected error occurred. Please try again.");
        }
      }
    } catch (error: unknown) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        if (error.response?.data.success === false) {
          makeToastError(error.response?.data.message);
        }
      } else {
        console.log("Unexpected error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex relative">
      <img
        src="/img/Background Images/Group 1109.svg"
        alt=""
        className="absolute object-cover top-0 left-0 bottom-0 right-0 w-full h-full"
      />

      <div className="bg-[#F5E9FF] max-w-[350px] h-fit backdrop-blur-2xl rounded-2xl p-5 flex flex-col gap-3 m-auto">
        <ArrowLeft onClick={() => navigate("/")} className="cursor-pointer" />

        <div className="flex flex-col w-full justify-center items-center space-y-5">
          {/* image */}
          <img
            src="/img/Background Images/Group 1107.png"
            alt="login page b2b"
            className="w-32 h-32"
          />
          <p className="font-bold">Enter Mobile Number</p>

          <p className="text-gray-400 text-center">
            Enter your 10-digit mobile number to receive the verification code.
          </p>

          {/* === form starting ======== */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-start my-2">
                      Mobile Number
                    </FormLabel>
                    <FormControl>
                      <PhoneInput
                        country={"in"}
                        preferredCountries={["in", "us", "sa", "ae"]}
                        enableSearch={true}
                        placeholder="Valid mobile"
                        value={field.value}
                        buttonStyle={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                        onChange={(value, data: CountryData) => {
                          const dialCode = data?.dialCode || "";
                          let phoneNumber = value;

                          if (phoneNumber.startsWith(dialCode)) {
                            phoneNumber = phoneNumber.slice(dialCode.length);
                          }

                          form.setValue("mobile", `${dialCode}-${phoneNumber}`);
                          form.setValue("mobile4OTP", phoneNumber);
                        }}
                        inputClass="w-full p-5 mt-1 rounded-xl border border-gray-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={loading}
                variant="b2bStyle"
                className="w-full"
                size="b2b"
              >
                {loading ? (
                  <ClipLoader color="#ffff" size={20} />
                ) : (
                  " Get Verification Code"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
