import { createBrowserRouter } from "react-router-dom";

// Lazy load components
import {
  App,
  ErrorPage,
  About,
  OtpVerificationPage,
  Register,
  UserDetails,
  UserLogin,
  HomePage,
  KycDetails,
  KycLayout,
  DashboardLayoutBasic,
  MainHome,
  AppLayout,
  AdmLayout,
} from "./page-routers";

// import App from "@/App";
// import ErrorPage from "@/pages/ErrorPage";
// import About from "@/pages/UserSide/About/About";

// import OtpVerificationPage from "@/pages/UserSide/Auth_Page/OtpVerificationPage";
// import Register from "@/pages/UserSide/Auth_Page/Register";
// import UserDetails from "@/pages/UserSide/Auth_Page/UserDetails";
// import UserLogin from "@/pages/UserSide/Auth_Page/UserLoginPage/UserLogin";
// import HomePage from "@/pages/UserSide/Home/Home";
// import KycDetails from "@/pages/UserSide/UserKycPage/KycDetails/KycDetails";
// import KycLayout from "@/KycLayout";
// import MainHome from "@/pages/UserSide/Home/MainHome";
// import AppLayout from "@/Layout";
// import AdmLayout from "@/AdmLayout";
// import DashboardLayoutBasic from "@/pages/adminSide/Dashboard";

import KycHome from "@/pages/UserSide/UserKycPage/KycHome";
import { ScrollProvider } from "@/providers/context/ScrollContext";
import ProtectedRoute from "@/middlewares/ProtectedRoute";
import { isAuthenticated } from "@/middlewares/IsAuthenticated";

import CategoryProductsPage from "@/pages/UserSide/Prod_pages/Category_wise/CategoryProductsPage";
import FolderStructure from "@/pages/folder-structure/FolderStructure";
import Products from "@/pages/UserSide/Prod_pages/ProductDetails/Products";
import ShoppingCart from "@/pages/UserSide/cart/page";
import CheckoutPage from "@/pages/UserSide/cart/checkout/page";
import ConfirmOrder from "@/pages/UserSide/cart/checkout/Confirm-Order";
import SettingsProfilePage from "@/pages/UserSide/my-account/my-profile-page";
import MyOrdersPage from "@/pages/UserSide/my-account/my-orders/My-Orders-Page";
import SingleOrderPage from "@/pages/UserSide/my-account/my-orders/single-order/Single-Order-Page";
import ChatPage from "@/pages/UserSide/my-account/chat/Chat-Page";
import WishlistPage from "@/pages/UserSide/my-account/wishlist/wishlist-page";
import UseReviewPage from "@/pages/UserSide/my-account/reviews/use-review-page";
import UseReturnPage from "@/pages/UserSide/my-account/return_user/user-return-page";
import { Suspense } from "react";
import PreloaderPage from "@/preloader-page";
// import PreloaderPage from "@/preloader-page";

// import withAuth from "@/middlewares/WithAuth";

// const ProtectedHomePage = withAuth(HomePage);
// const ProtectedRegister = withAuth(Register);
// const ProtectedUserLogin = withAuth(UserLogin);
// const NonProtectedAbout = withAuth(About); // Assuming About is non-protected
// const NonProtectedOtpVerification = withAuth(OtpVerificationPage);
// const NonProtectedUserDetails = withAuth(UserDetails);

const isLogged = isAuthenticated();

const rootRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={<PreloaderPage/>} >
          <ScrollProvider>{isLogged ? <AppLayout /> : <App />}</ScrollProvider>
        </Suspense>
      ),
      children: [
        {
          index: true,
          path: "/",
          element: (
            <ProtectedRoute isProtected={true} isHomeLogin={true}>
              {isLogged ? <MainHome /> : <HomePage />}
            </ProtectedRoute>
          ),
          errorElement: <ErrorPage />,
        },
        {
          path: "/register",
          element: (
            <ProtectedRoute isProtected={true}>
              <Register />{" "}
            </ProtectedRoute>
          ),
        },
        // {
        //   path: "/loader",
        //   element: (
        //     <ProtectedRoute isProtected={true}>
        //       <PreloaderPage />{" "}
        //     </ProtectedRoute>
        //   ),
        // },
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
            <ProtectedRoute isProtected={true}>
              {" "}
              <About />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/folder",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <FolderStructure />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/register/otp-verification",
          element: (
            <ProtectedRoute isProtected={true}>
              <OtpVerificationPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/register/user-details",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <UserDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "/category/:slug",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <CategoryProductsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/products/:slug",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: "/cart",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <ShoppingCart />
            </ProtectedRoute>
          ),
        },
        {
          path: "/cart/checkout",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <CheckoutPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/cart/checkout/order-confirmation",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <ConfirmOrder />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-account",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <SettingsProfilePage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-account/my-orders",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <MyOrdersPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-account/my-orders/:slug",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <SingleOrderPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-account/my-orders/:slug/review/:orderId",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <UseReviewPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-account/chat",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <ChatPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-account/my-wishlist",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <WishlistPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-account/return",
          element: (
            <ProtectedRoute isProtected={true}>
              {" "}
              <UseReturnPage />
            </ProtectedRoute>
          ),
        },
      ],
    },

    //   ===== KYC Sections =================================
    {
      path: "/kyc",

      element: (
        <Suspense fallback={<PreloaderPage/>} >
          {/* <ScrollProvider> */}
            <ProtectedRoute>
              <KycLayout />
            </ProtectedRoute>
          {/* </ScrollProvider> */}
        </Suspense>
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
    //   ===== Admin Sections =================================
    {
      path: "/admin",

      element: <AdmLayout />,
      children: [
        {
          index: true,
          path: "/admin",
          element: <DashboardLayoutBasic />,
        },
        {
          path: "dashboard",
          element: <DashboardLayoutBasic />, // Loads at "/admin/dashboard"
        },
        {
          path: "orders/pending",
          element: <UserDetails />, // Loads at "/admin/dashboard"
        },
        {
          path: "orders/completed",
          element: <UserDetails />, // Loads at "/admin/dashboard"
        },
      ],
    },
    {
      path: "*",

      element: (
        <Suspense fallback={<PreloaderPage/>} >
          <ErrorPage />
        </Suspense>
      ),
    },
  ],
  { basename: "/" }
);

export default rootRouter;
