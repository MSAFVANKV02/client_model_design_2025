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

function UserLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobile: "",
      mobile4OTP: "", // Initialize mobile4OTP to an empty string
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const response = await axios.post(`/user/sendOtpForLogin`, {
        mobile4OTP: data.mobile4OTP,
      });
      if (response.status === 200) {
        makeToast(`Otp Sended to ${data.mobile4OTP}`);
        navigate(`/login?page=otp-verification&auth=${data.mobile4OTP}`);
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
    <div className="h-screen w-screen flex items-center justify-center relative">
      {/* Main Container */}
      <img src="/src/assets/images/Background Images/Group 1109.svg" alt="" className="absolute w-full h-full object-cover"/>
      <div className="flex flex-col lg:flex-row w-full max-w-5xl h-auto bg-white shadow-lg rounded-3xl overflow-hidden">
        
        {/* Image Section */}
        <div className="hidden lg:block lg:w-3/4 relative">
          <img
            src="/src/assets/images/Hero Images/login_main.png"
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8 relative bg-[#F5E9FF] flex flex-col justify-center items-center">
          <ArrowLeft
            onClick={() => navigate("/")}
            className="absolute top-4 left-4 cursor-pointer"
          />
          <img
            src="/src/assets/images/Background Images/Group 1107.png"
            alt="logo"
            className="w-28 h-28 mb-4"
          />
          <p className="font-bold text-xl mb-2">Enter Mobile Number</p>
          <p className="text-gray-500 text-center mb-6">
            Enter your 10-digit mobile number to receive the verification code.
          </p>
          
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-2">Mobile Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        country={"in"}
                        preferredCountries={["in", "us", "sa", "ae"]}
                        enableSearch={true}
                        placeholder="Valid mobile number"
                        value={field.value}
                        inputStyle={{ width: "100%" }}
                        // dropdownStyle={{backgroundColor:"transparent"}}
                        buttonStyle={{backgroundColor:"transparent",border:"none"}}
                        onChange={(value, data: CountryData) => {
                          const dialCode = data?.dialCode || "";
                          let phoneNumber = value;

                          if (phoneNumber.startsWith(dialCode)) {
                            phoneNumber = phoneNumber.slice(dialCode.length);
                          }

                          form.setValue("mobile", `${dialCode}-${phoneNumber}`);
                          form.setValue("mobile4OTP", phoneNumber);
                        }}
                        inputClass="w-full p-6 border border-gray-300  rounded"
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

export default UserLogin;
