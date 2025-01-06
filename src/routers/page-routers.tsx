import { lazy } from "react";

export const App = lazy(() => import("@/App"));
export const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
export const About = lazy(() => import("@/pages/UserSide/About/About"));
export const OtpVerificationPage = lazy(() => import("@/pages/UserSide/Auth_Page/OtpVerificationPage"));
export const Register = lazy(() => import("@/pages/UserSide/Auth_Page/Register"));
export const UserDetails = lazy(() => import("@/pages/UserSide/Auth_Page/UserDetails"));
export const UserLogin = lazy(() => import("@/pages/UserSide/Auth_Page/UserLoginPage/UserLogin"));
export const HomePage = lazy(() => import("@/pages/UserSide/Home/Home"));
export const KycDetails = lazy(() => import("@/pages/UserSide/UserKycPage/KycDetails/KycDetails"));
export const KycLayout = lazy(() => import("@/KycLayout"));
export const DashboardLayoutBasic = lazy(() => import("@/pages/adminSide/Dashboard"));
export const MainHome = lazy(() => import("@/pages/UserSide/Home/MainHome"));
export const AppLayout = lazy(() => import("@/Layout"));
export const AdmLayout = lazy(() => import("@/AdmLayout"));
