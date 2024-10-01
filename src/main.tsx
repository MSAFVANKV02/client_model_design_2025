import { createRoot } from "react-dom/client";
import "./index.css";
import axios from "axios";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import rootRouter from "./routers/RootRouter.tsx";
import { store } from "./redux/store.ts";
// import { AuthProvider } from "./providers/AuthContext.tsx";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <AuthProvider> */}
      <RouterProvider router={rootRouter} />
    {/* </AuthProvider> */}
  </Provider>
);
