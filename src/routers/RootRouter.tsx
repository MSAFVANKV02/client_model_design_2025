import App from "@/App";
import About from "@/pages/UserSide/About/About";

import OtpVerificationPage from "@/pages/UserSide/Auth_Page/OtpVerificationPage";
import Register from "@/pages/UserSide/Auth_Page/Register";
import UserDetails from "@/pages/UserSide/Auth_Page/UserDetails";
import { Home } from "lucide-react";

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
                        <Home />
                    // </ProtectedRoute>
                ),
            },
            {
                path:"/register",
                element: <Register/>
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