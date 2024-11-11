import { createRoot } from "react-dom/client";
import "./index.css";
import "@/assets/css/components.css"
import axios from "axios";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import rootRouter from "./routers/RootRouter.tsx";
import { store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { AuthProvider } from "./providers/AuthContext.tsx";

const persister = persistStore(store);

// import { AuthProvider } from "./providers/AuthContext.tsx";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AuthProvider>
      <PersistGate persistor={persister}>
        <RouterProvider router={rootRouter} />
      </PersistGate>
    </AuthProvider>
  </Provider>
);
