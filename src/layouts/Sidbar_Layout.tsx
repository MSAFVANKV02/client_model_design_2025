import usePageTitle from "@/hooks/usePageTitle";
import ProtectedRoute from "@/middlewares/ProtectedRoute";
import { Outlet } from "react-router-dom";

export const MyAccountLayout = () => {
  {
    usePageTitle("Ayaboo | My Account");
  }
  return (
    <div>
      <ProtectedRoute isProtected={true}>
        <Outlet />
      </ProtectedRoute>
    </div>
  );
};
