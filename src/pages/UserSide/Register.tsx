import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PhoneInput, { CountryData } from "react-phone-input-2";
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
import { log } from "console";

// Define the Zod schema for phone number validation
const formSchema = z.object({
  phone: z
    .string()
    .min(10, { message: "Phone number must be exactly 10 digits." })
    // .max(10, { message: "Phone number must not exceed 10 digits." })
    // .regex(/^\d+$/, { message: "Phone number must only contain digits." }),
});

interface FormData {
  phone: string;
}

function Register() {
  // const location = useLocation();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    // console.log(`Phone number: ${data.phone}`);
    try {
      const response = await axios.post(`/user/sendOtp`,{data})
      if(response.status === 200) {
        console.log("OTP sent successfully");
        navigate('/register/otp-verification')
      }
    } catch (error:any) {
      console.log(error);
      
    }
    navigate('/register/otp-verification')
  };

  return (
    <div
      className="h-screen w-screen flex  relative"
      // style={{
      //   backgroundImage:
      //     "url(/src/assets/images/Background Images/Group 1109.svg)",
      // }}
    >
      <img
        src="/src/assets/images/Background Images/Group 1109.svg"
        alt=""
        className="absolute object-cover top-0 left-0 bottom-0 right-0 w-full h-full"
      />
      <div className="bg-[#F5E9FF]  max-w-[350px] h-fit backdrop-blur-2xl rounded-2xl p-5 flex flex-col gap-3 m-auto">
        <ArrowLeft onClick={() => navigate("/")} className="cursor-pointer" />
        <div className="flex flex-col w-full justify-center items-center  space-y-5">
          <img
            src="/src/assets/images/Background Images/Group 1107.png"
            alt="login page b2b"
            className="w-28 h-28"
          />
          <p className="font-bold">Enter Mobile Number</p>
          <p className="text-gray-400 text-center">
            Enter your 10-digit mobile number to receive the verification code.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Phone Input Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-start my-2">
                      Mobile Number
                    </FormLabel>
                    <FormControl>
                      {/* <Input placeholder="Enter your phone number" {...field} /> */}
                      <PhoneInput
                        country={"in"}
                        preferredCountries={["in", "us", "sa", "ae"]}
                        enableSearch={true}
                        placeholder="Valid mobile"
                        value={field.value}
                        onChange={(value, data: CountryData) => {
                          const dialCode = data?.dialCode || "";
                          let phoneNumber = value;

                          // Check if the dial code is already part of the phone number
                          if (phoneNumber.startsWith(dialCode)) {
                            // Remove the dial code from the beginning of the phone number
                            phoneNumber = phoneNumber.slice(
                              dialCode.length
                            );
                          }

                          console.log(`Formatted Phone Number: ${dialCode}`);
                          form.setValue("phone",  `${dialCode}-${phoneNumber}`);

                          // field.onChange(phoneNumber); // Update the form state
                        }}
                        inputClass="w-full p-3 mt-1 rounded-sm border border-gray-300"
                      />
                    </FormControl>
                    {/* <FormDescription>
                Enter your 10-digit mobile number to receive the verification code.
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant="b2bStyle" className="w-full">
                Get Verification Code
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
