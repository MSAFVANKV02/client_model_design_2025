import App from "@/App";
import About from "@/pages/UserSide/About/About";

import OtpVerificationPage from "@/pages/UserSide/Auth_Page/OtpVerificationPage";
import Register from "@/pages/UserSide/Auth_Page/Register";
import UserDetails from "@/pages/UserSide/Auth_Page/UserDetails";
import UserLogin from "@/pages/UserSide/Auth_Page/UserLogin";
import HomePage from "@/pages/UserSide/Home/Home";


import { createBrowserRouter } from "react-router-dom";


const rootRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                path:"/",
                element: (
                    // <ProtectedRoute>
                        <HomePage />
                    // </ProtectedRoute>
                ),
            },
            {
                path:"/register",
                element: <Register/>
            },
            {
                path:"/login",
                element: <UserLogin/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/register/otp-verification",
                element: <OtpVerificationPage/>
            },
            {
                path:"/register/user-details",
                element: <UserDetails/>
            },
        ]
    }
])

export default rootRouter;