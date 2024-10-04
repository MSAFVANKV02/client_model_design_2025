import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import KycBanner from "./KycBanner";
import { saveKycDetails } from "@/redux/userSide/KycSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import KycProofs from "./KycProofs";

// Define the schema
const formSchema = z.object({
  businessName: z.string().min(1, { message: "Business name is required." }),
  emailId: z.string().email({ message: "Invalid email address." }),
  buildingName: z.string().min(1, { message: "Building name is required." }),
  street: z.string().min(1, { message: "Street name is required." }),
  post: z.string().min(1, { message: "Post is required." }),
  pinCode: z.string().min(1, { message: "Pincode is required." }),
  state: z.string().min(1, { message: "State is required." }),
  country: z.string().min(1, { message: "Country is required." }),
});

// Define the form data type
interface KycFormData {
  businessName: string;
  emailId: string;
  buildingName: string;
  street: string;
  post: string;
  pinCode: string;
  state: string;
  country: string;
}

export default function KycDetails() {
  const dispatch = useAppDispatch();
  const kycDetails = useAppSelector((state) => state.kyc);
  console.log(kycDetails);

  const form = useForm<KycFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "dfsdf",
      emailId: "safva@g.com",
      buildingName: "sfsdfsd",
      street: "sdfsd",
      post: "sdfsdf",
      pinCode: "123456",
      state: "sdfsd",
      country: "dfsdfsd",
    },
  });

  const { handleSubmit } = form;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state

  const queryParams = new URLSearchParams(window.location.search);
  const proofs = queryParams.get("proofs");

  const onSubmit = async (data: KycFormData) => {
    setLoading(true);
    try {
      // fetch("http://localhost:3001/kyc",{
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // })
      dispatch(saveKycDetails(data));
      // dispatch(clearKycDetails());

      // Handle success (e.g., navigate to another page)
      navigate(`/kyc/details?proofs=${kycDetails.buildingName}`);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section_container_dash  py-10 space-y-4 min-h-screen">
      {/* form starting ========== */}

      {proofs ? (
        <>
          <div className="sm:text-xl text-lg">
            <span>Upload</span>{" "}
            <span className="text-textMain">Any Document</span>
          </div>

          <KycProofs />
        </>
      ) : (
        <>
          <div className="sm:text-xl text-lg">
            <span>Complete</span>{" "}
            <span className="text-textMain">Shop’s KYC</span>
          </div>

          <div className="">
            <Form {...form}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full space-y-3"
              >
                {/* Business Name */}
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          type="text"
                          {...field}
                          placeholder="Enter your business name"
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email ID */}
                <FormField
                  control={form.control}
                  name="emailId"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          type="email"
                          {...field}
                          placeholder="Enter your email ID"
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Building Name */}
                <FormField
                  control={form.control}
                  name="buildingName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          type="text"
                          {...field}
                          placeholder="Enter your building name"
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Street */}
                <FormField
                  control={form.control}
                  name="street"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          type="text"
                          {...field}
                          placeholder="Enter your street"
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-3">
                  {/* Post */}
                  <FormField
                    control={form.control}
                    name="post"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            type="text"
                            {...field}
                            placeholder="Enter your post"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Pin Code */}
                  <FormField
                    control={form.control}
                    name="pinCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            type="text"
                            {...field}
                            placeholder="Enter your pin code"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* State */}
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            type="text"
                            {...field}
                            placeholder="Enter your state"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Country */}
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            type="text"
                            {...field}
                            placeholder="Enter your country"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-6">
                  <Button
                    type="submit"
                    disabled={loading}
                    variant="b2bStyle"
                    className="w-full sm:px-16 sm:w-auto"
                    size={`b2b`}
                  >
                    {loading ? (
                      <ClipLoader color="#ffff" size={20} />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>

                {/* Optional Registration Link */}
                {/* <div className="text-sm text-gray-500">
              If you don't have an account,{" "}
              <Link to={`/register`} className="text-textMain">
                register here
              </Link>
            </div> */}
              </form>
            </Form>
          </div>
        </>
      )}

      {/* banner section ====== */}
      <KycBanner />
    </div>
  );
}
