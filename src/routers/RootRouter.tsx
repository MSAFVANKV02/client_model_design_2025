import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";
import About from "@/pages/UserSide/About/About";

import OtpVerificationPage from "@/pages/UserSide/Auth_Page/OtpVerificationPage";
import Register from "@/pages/UserSide/Auth_Page/Register";
import UserDetails from "@/pages/UserSide/Auth_Page/UserDetails";
import UserLogin from "@/pages/UserSide/Auth_Page/UserLoginPage/UserLogin";
import HomePage from "@/pages/UserSide/Home/Home";
import KycDetails from "@/pages/UserSide/UserKycPage/KycDetails/KycDetails";
import KycLayout from "@/KycLayout";


import { createBrowserRouter } from "react-router-dom";
import KycHome from "@/pages/UserSide/UserKycPage/KycHome";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: (
          // <ProtectedRoute>
          <HomePage />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register/otp-verification",
        element: <OtpVerificationPage />,
      },
      {
        path: "/register/user-details",
        element: <UserDetails />,
      },

    ],
  },

//   ===== KYC Sections =================================
  {
    path: "/kyc",
    element: <KycLayout />,
    children: [
      {
        index: true,
        path: "/kyc",
        element: <KycHome />,
      },
      {
        path: "/kyc/details",
        element: <KycDetails />,
      },
    ],
  },
  {
    path: "*",

    element: <ErrorPage />,
  },
]);

export default rootRouter;
