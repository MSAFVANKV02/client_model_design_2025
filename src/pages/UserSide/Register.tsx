import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

// Define the Zod schema for phone number validation
const formSchema = z.object({
  phone: z
    .string()
    .min(10, { message: "Phone number must be exactly 10 digits." })
    .max(10, { message: "Phone number must not exceed 10 digits." })
    .regex(/^\d+$/, { message: "Phone number must only contain digits." }),
});

interface FormData {
  phone: string;
}

function Register() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

   // Handle form submission
   const onSubmit = (data: FormData) => {
    alert(`Phone number: ${data.phone}`);
  };


  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-[#F5E9FF] max-w-[350px] h-fit backdrop-blur-2xl rounded-2xl p-5 flex flex-col gap-3 m-auto">
        <ArrowLeft />
        <div className="flex flex-col w-full justify-center items-center text-center space-y-5">
          <img
            src="/src/assets/images/Background Images/Group 1107.png"
            alt="login page b2b"
            className="w-28 h-28"
          />
          <p>Enter Mobile Number</p>
          <small className="text-gray-400">
            Enter your 10-digit mobile number to receive the verification code.
          </small>
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Phone Input Field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="float-left my-2">Mobile Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your phone number" {...field} />
              </FormControl>
              {/* <FormDescription>
                Enter your 10-digit mobile number to receive the verification code.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="b2bStyle" className="w-full">Get Verification Code</Button>
      </form>
          </Form>
         
        </div>
      </div>
    </div>
  );
}

export default Register;
