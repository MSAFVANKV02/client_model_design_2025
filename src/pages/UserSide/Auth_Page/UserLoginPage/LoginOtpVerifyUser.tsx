import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { makeToast, makeToastError } from "@/utils/toaster";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const formSchema = z.object({
  otp: z.string().min(6, { message: "OTP is required." }),
});

interface FormData {
  otp: string;
}

type Props = {
  setShowOtpLogin: (value: boolean) => void;
};

export default function LoginOtpVerifyUser({ setShowOtpLogin }: Props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState<number>(() => {
    const savedTimer = localStorage.getItem("otp-timer");
    return savedTimer ? Number(savedTimer) : 60; // Load timer from localStorage or start at 3
  });
  const [isResendVisible, setIsResendVisible] = useState<boolean>(() => {
    const isFinished = localStorage.getItem("otp-finished") === "true";
    return isFinished; // Show "Resend OTP" if finished
  });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const queryParams = new URLSearchParams(window.location.search);
  const auth = queryParams.get("auth");

  useEffect(() => {
    // If the timer has finished, do not start the interval again
    if (timer > 0 && !isResendVisible) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            const newTimer = prevTimer - 1;
            localStorage.setItem("otp-timer", newTimer.toString()); // Save timer to localStorage
            return newTimer;
          } else {
            clearInterval(interval); // Stop timer
            setIsResendVisible(true); // Show resend button
            localStorage.removeItem("otp-timer"); // Remove timer from localStorage
            localStorage.setItem("otp-finished", "true"); // Set finished state in localStorage
            return 0;
          }
        });
      }, 1000);

      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }
  }, [timer, isResendVisible]);

  useEffect(() => {
    // Check if the timer has reached 0 and handle visibility of resend button
    if (timer === 0) {
      setIsResendVisible(true);
      localStorage.setItem("otp-finished", "true"); // Ensure finished state is set
    }
  }, [timer]);

  const onSubmit = async (data: FormData) => {
    console.log(`OTP entered: ${data.otp}`);

    try {
      const response = await axios.post(`/user/verifyOtpForLogin`, {
        otp: data.otp,
        mobile: auth,
      });
      // console.log(response.data);

      if (response.status === 200 && response.data.success) {
        if (response.data.user) {
          // if(response.data.user.){

          // }
          if (
            response.data.user.isVerified &&
            response.data.user.isRegistered &&
            response.data.user.isKycCompleted &&
            response.data.user.kycApproved
          ) {
            makeToast("Otp Verified Successfully.");
            navigate(`/dashboard`);
          } else if (
            response.data.user.isVerified &&
            response.data.user.isRegistered && 
            !response.data.user.isKycCompleted 
          ) {
            makeToast("Complete Kyc registration..");
            navigate(`/kyc`);
          } else if (
            response.data.user.isVerified &&
            !response.data.user.isRegistered
          ) {
            makeToast("Your account is under Processing....");
            navigate(`/register/user-details?auth=${auth}`);
          } else {
            makeToast("Your account is under Processing....");
            setMessage("Your account is under Processing");
            // navigate(`/register`);
          }
        }

        // You can navigate to the desired page here
      }
    } catch (error: unknown) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 500) {
          makeToastError("Enter Valid Mobile");
        } else if (error.response?.data.success === false) {
          makeToastError(error.response?.data.message);
        }
      }
    }
  };

  const handleResendOtp = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`/user/resendOtp`, { mobile: auth });

      if (response.status === 200) {
        makeToast("OTP Resent Successfully");

        // Reset the timer to 3 seconds
        setTimer(60);
        setIsResendVisible(false);
        localStorage.setItem("otp-timer", "60"); // Save new timer in localStorage
        localStorage.removeItem("otp-finished"); // Remove finished state
      }
    } catch (error: unknown) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        if (error.response?.data.success === false) {
          makeToastError(error.response?.data.message);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2 p-8 relative bg-[#F5E9FF] flex flex-col justify-center items-center">
      <ArrowLeft
        onClick={() => {
          setShowOtpLogin(false);
          localStorage.removeItem("otp-timer");
          localStorage.removeItem("otp-finished");
          navigate("/login");
        }}
        className="absolute top-4 left-4 cursor-pointer text-textMain"
        fontSize={20}
      />
      <img
        src="/src/assets/images/Background Images/Group 1117.png"
        alt="logo"
        className="w-36 mb-4"
      />
      <p className="font-extrabold text-2xl mb-2">Verify Mobile Number</p>
      <p className="text-gray-500 text-center sm:px-11 px-5 mb-6">
        Enter 6 digit verification code sent to{" "}
        <b className="text-black">Mobile Number</b>
      </p>
      {message && (
        <p className="text-xs bg-green-100 p-2 rounded-md">
          {message}{" "}
          <Link to={`/`} className="text-blue-500 underline">
            Visit Our Home
          </Link>
        </p>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    value={field.value} // Bind value from react-hook-form
                    onChange={field.onChange} // Handle change for OTP input
                  >
                    <InputOTPGroup className="space-x-2 rounded-xl">
                      {[...Array(6)].map((_, index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          className="border text-center text-xl rounded-xl bg-white border-gray-300"
                          onChange={(e) => {
                            const target = e.target as HTMLInputElement;
                            const otpValue = target.value;
                            field.onChange(otpValue); // Update the form state
                          }}
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isResendVisible ? (
            <p
              className="text-center text-sm hover:underline cursor-pointer text-blue-400"
              onClick={handleResendOtp}
            >
              Resend Otp
            </p>
          ) : (
            <p className="text-center text-sm text-gray-500">
              Resend in {timer} seconds
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            variant="b2bStyle"
            size="b2b"
            className="w-full"
          >
            {loading ? (
              <ClipLoader color="#ffff" size={20} />
            ) : (
              "Get Verification Code"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
