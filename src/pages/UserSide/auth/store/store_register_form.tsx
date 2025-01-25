import AyButton from "@/components/myUi/AyButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ErrorMessage, Form, Formik } from "formik";
import PhoneInput, { CountryData } from "react-phone-input-2";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";

import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object().shape({
  mobile: Yup.string()
    .matches(/^\d{10,}$/, "Mobile number must be at least 10 digits")
    .required("Mobile number is required"),
});

export default function StoreRegisterForm() {
  return (
    <div className="flex justify-center items-center p-4 bg-gray-50 h-full">
      <Formik
        initialValues={{
          mobile: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Card className="w-full max-w-[400px] space-y-5 border-none  shadow-lg">
              <CardHeader>
                <CardTitle>Register as a Stockist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <CardDescription>
                  Sign up for a stockist account to list products, manage your
                  inventory, and earn commission.
                </CardDescription>
                <div className="flex flex-col gap-3">
                  {/* <Input
                    type="text"
                    placeholder="Mobile Number"
                    name="mobile"
                    className="w-full border p-6"
                  /> */}
                  <PhoneInput
                    country={"in"}
                    preferredCountries={["in", "us", "sa", "ae"]}
                    enableSearch={true}
                    placeholder="Valid mobile number"
                    value={values.mobile}
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

                      setFieldValue("mobile", `${dialCode}-${phoneNumber}`);
                      setFieldValue("mobile4OTP", phoneNumber);
                    }}
                    inputClass="w-full p-6 border border-gray-300  rounded"
                  />
                  <ErrorMessage
                    name="mobile"
                    component={"span"}
                    className="text-red-500 text-xs"
                  />
                </div>
              </CardContent>
              {/* ==== footer ===== */}
              <CardFooter className="flex flex-col gap-4">
                <AyButton
                  title="Get Verification Code"
                  type="submit"
                  sx={{
                    width: "100%",
                    height:"40px"
                  }}
                />
                <div className="flex text-xs gap-2 items-center">
                  <p className="text-sm">Already a Supplier</p> ?
                  <Link
                    to={"https://store.ayaboo.com/login"}
                    className="text-blue-600 hover:text-blue-400 hover:underline"
                  >
                    Sign In
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
}
