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
import { ScrollProvider } from "@/providers/context/ScrollContext";
import ProtectedRoute from "@/middlewares/ProtectedRoute";
// import withAuth from "@/middlewares/WithAuth";

// const ProtectedHomePage = withAuth(HomePage);
// const ProtectedRegister = withAuth(Register);
// const ProtectedUserLogin = withAuth(UserLogin);
// const NonProtectedAbout = withAuth(About); // Assuming About is non-protected
// const NonProtectedOtpVerification = withAuth(OtpVerificationPage);
// const NonProtectedUserDetails = withAuth(UserDetails);

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollProvider>
        <App />
      </ScrollProvider>
    ),
    children: [
      {
        index: true,
        path: "/",
        element: (
          <ProtectedRoute isProtected={true}>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedRoute isProtected={true}>
            <Register />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedRoute isProtected={false}>
            <UserLogin />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute  isProtected={true}>
            {" "}
            <About />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/register/otp-verification",
        element: (
          <ProtectedRoute  isProtected={true}>
            <OtpVerificationPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/register/user-details",
        element: (
          <ProtectedRoute  isProtected={true}>
            {" "}
            <UserDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },

  //   ===== KYC Sections =================================
  {
    path: "/kyc",

    element: (
      <ScrollProvider>
        <ProtectedRoute>
        <KycLayout />
        </ProtectedRoute>
      </ScrollProvider>
    ),
    children: [
      {
        index: true,
        path: "/kyc",
        element: <KycHome />,
      },
      {
        path: "details",
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
