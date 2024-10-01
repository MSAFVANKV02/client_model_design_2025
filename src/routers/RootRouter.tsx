import App from "@/App";
import About from "@/pages/UserSide/About";
// import ProtectedRoute from "@/middlewares/ProtectedRoute";
import Home from "@/pages/UserSide/Home";
import OtpVerificationPage from "@/pages/UserSide/OtpVerificationPage";
import Register from "@/pages/UserSide/Register";

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
        ]
    }
])

export default rootRouter;