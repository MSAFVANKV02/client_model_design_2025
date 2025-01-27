// import {

//   CardContent,
//   CardDescription,

//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { ErrorMessage } from "formik";
// import PhoneInput, { CountryData } from "react-phone-input-2";

// import "react-phone-input-2/lib/style.css";

// type Props = {
//   setFieldValue: (field: string, value: unknown) => void;
//   isSubmitting?: boolean;
// };

// export default function StoreRegisterSendOtpForm({
//   setFieldValue,

// }: Props) {
//   return (
//     <div className="">
//          <CardHeader>
//           <CardTitle>Register as a Stockist</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-2">
//           <CardDescription>
//             Sign up for a stockist account to list products, manage your
//             inventory, and earn commission.
//           </CardDescription>
//           <div className="flex flex-col gap-3">
//             {/* <Input
//                     type="text"
//                     placeholder="Mobile Number"
//                     name="mobile"
//                     className="w-full border p-6"
//                   /> */}
//             <PhoneInput
//               country={"in"}
//               preferredCountries={["in", "us", "sa", "ae"]}
//               enableSearch={true}
//               placeholder="Valid mobile number"
//               // value={values.mobile}
//               inputStyle={{ width: "100%" }}
//               // dropdownStyle={{backgroundColor:"transparent"}}
//               buttonStyle={{
//                 backgroundColor: "transparent",
//                 border: "none",
//               }}
//               onChange={(value, data: CountryData) => {
//                 const dialCode = data?.dialCode || "";
//                 let phoneNumber = value;

//                 if (phoneNumber.startsWith(dialCode)) {
//                   phoneNumber = phoneNumber.slice(dialCode.length);
//                 }

//                 // setFieldValue("mobile", `${dialCode}-${phoneNumber}`);
//                 setFieldValue("mobile", phoneNumber);
//               }}
//               inputClass="w-full p-6 border border-gray-300  rounded"
//             />
//             <ErrorMessage
//               name="mobile"
//               component={"span"}
//               className="text-red-500 text-xs"
//             />
//           </div>
//         </CardContent>
//     </div>
//   );
// }
// =================================================================

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { register_send_otp_store_Api } from "@/services/user_side_api/store/route";
import { makeToast, makeToastError } from "@/utils/toaster";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useState } from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import { z } from "zod";
import AyButton from "@/components/myUi/AyButton";
import StoreVerifyOtpForm from "./store_verify_otp_form";

const formSchema = z.object({
  mobile: z
    .string()
    .min(10, { message: "Phone number must be exactly 10 digits." }),
  // mobile4OTP: z.string().min(1, { message: "Mobile number is required." }), // Add validation for mobile4OTP if necessary
});

interface FormData {
  mobile: string;
  mobile4OTP: string;
}

export default function StoreRegisterSendOtpForm() {
  const [showOtpLogin, setShowOtpLogin] = useState(() => {
    const timer = localStorage.getItem("otp-timer");
    return timer && parseInt(timer) > 0;  // return a boolean based on the timer
  });
  

  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobile: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data.mobile, "responce in page");
    try {
      setLoading(true);
      // const response = await userLoginSendOtp(data.mobile4OTP);
      const response = await register_send_otp_store_Api(data.mobile);
      // response coming from userLoginSendOtp

      if (response.status === 200) {
        localStorage.setItem("store_reg_num", data.mobile);
        makeToast(`Otp Send to ${data.mobile}`);
        setShowOtpLogin(true);
        // navigate(`/login?page=otp-log&auth=${data.mobile}`);
        localStorage.setItem("otp-timer", "60");
        localStorage.removeItem("otp-finished");
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
    <div className="">
      <CardHeader>
        <CardTitle>Register as a Stockist</CardTitle>
      </CardHeader>
      {showOtpLogin ? (
        <StoreVerifyOtpForm />
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <CardContent className="space-y-2">
              <CardDescription>
                Sign up for a stockist account to list products, manage your
                inventory, and earn commission.
              </CardDescription>
              <FormField
                control={form.control}
                name="mobile"
                render={() => (
                  <FormItem>
                    <FormLabel className="mb-2">Mobile Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        country={"in"}
                        preferredCountries={["in", "us", "sa", "ae"]}
                        enableSearch={true}
                        placeholder="Valid mobile number"
                        // value={field.value}
                        inputStyle={{ width: "100%" }}
                        // dropdownStyle={{backgroundColor:"transparent"}}
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

                          // form.setValue(
                          //   "mobile",
                          //   `${dialCode}-${phoneNumber}`
                          // );
                          form.setValue("mobile", phoneNumber);
                        }}
                        inputClass="w-full p-6 border border-gray-300  rounded"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <AyButton
                title="Verify OTP"
                loading={loading}
                type="submit"
                sx={{
                  width: "100%",
                  height: "40px",
                }}
              />
              <div className="flex text-xs gap-2 items-center">
                <p className="text-sm">Already a Supplier</p> ?
                <Link
                  to="https://store.ayaboo.com/login"
                  className="text-blue-600 hover:text-blue-400 hover:underline"
                >
                  Sign In
                </Link>
              </div>
            </CardFooter>
          </form>
        </Form>
      )}
    </div>
  );
}
