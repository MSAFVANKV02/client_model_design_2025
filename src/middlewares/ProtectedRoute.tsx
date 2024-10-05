import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated_4_Kyc } from './IsAuthenticated';

interface ProtectedRouteProps {
  children: React.ReactNode;
  isProtected?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, isProtected }) => {
  const isLoggedIn = isAuthenticated_4_Kyc();

  // If logged in and on a protected page that is not "/kyc", redirect to "/kyc"
// If logged in and trying to access a protected route that's not KYC, redirect to KYC
if (isLoggedIn && isProtected && (window.location.pathname !== "/kyc" && !window.location.pathname.startsWith("/kyc/"))) {
    return <Navigate to="/kyc" replace />;
}

// If not logged in and trying to access "/kyc", redirect to home
if (!isLoggedIn && (window.location.pathname === "/kyc" || window.location.pathname.startsWith("/kyc/"))) {
    return <Navigate to="/" replace />;
}


  // If not authenticated and on login route, allow access
  if (!isLoggedIn && !isProtected) {
    return <>{children}</>;
  }

  // Allow authenticated users to access protected routes
  return <>{children}</>;
};

export default ProtectedRoute;
