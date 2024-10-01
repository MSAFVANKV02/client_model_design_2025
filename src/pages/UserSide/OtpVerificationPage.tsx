import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useEffect, useRef } from "react";
// Define the Zod schema for OTP validation
const formSchema = z.object({
  otp: z
    .string()
    .length(6, { message: "OTP must be exactly 6 digits." })
    .regex(/^\d+$/, { message: "OTP must only contain digits." }), // Ensure only digits are allowed
});

interface FormData {
  otp: string;
}

function OtpVerificationPage() {
  const navigate = useNavigate();
  const firstInputRef = useRef<HTMLInputElement | null>(null); 
  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus(); // Set focus to the first input field
    }
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  // Handle form submission
  const onSubmit = (data: FormData) => {
    console.log(`OTP entered: ${data.otp}`);
    // Here, you can add your logic to send the OTP for verification
    // e.g., making an API call to verify the OTP
  };

  return (
    <div className="h-screen w-screen flex relative">
      <img
        src="/src/assets/images/Background Images/Group 1109.svg"
        alt=""
        className="absolute object-cover top-0 left-0 bottom-0 right-0 w-full h-full"
      />
      <div className="bg-[#F5E9FF] max-w-[350px] h-fit backdrop-blur-2xl rounded-2xl p-5 flex flex-col gap-3 m-auto">
        <ArrowLeft onClick={() => navigate("/register")} className="cursor-pointer" />
        <div className="flex flex-col w-full justify-center items-center space-y-5">
          <img
            src="/src/assets/images/Background Images/Group 1107.png"
            alt="login page b2b"
            className="w-28 h-28"
          />
          <h4 className="font-bold">Verify Mobile Number</h4>
          <p className="text-gray-400 text-center">
            Enter the 6-digit OTP sent to your mobile number.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* OTP Input Field */}
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-start my-2">
                      Verify Your OTP
                    </FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        value={field.value} // Bind value from react-hook-form
                        onChange={field.onChange} // Handle change for OTP input
                      >
                        <InputOTPGroup className="space-x-2 rounded-none">
                          {[...Array(6)].map((_, index) => (
                            <InputOTPSlot
                              key={index}
                              index={index}
                              ref={firstInputRef }
                              className="border text-center text-xl rounded-md bg-white border-black"
                              onChange={(e) => {
                                const target = e.target as HTMLInputElement; // Cast target to HTMLInputElement
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
              <Button type="submit" variant="b2bStyle" className="w-full">
                Verify OTP
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default OtpVerificationPage;
