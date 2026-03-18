// import { useAuth0 } from "@auth0/auth0-react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const { isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return null;
//   }


//   if (isAuthenticated) {
//     return <Outlet />;
//   }

//   return <Navigate to="/" replace />;
// };

// export default ProtectedRoute;

import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  // ✅ Wait ONLY for Auth0 loading
  if (isLoading) {
    return <div>Loading...</div>; // not null
  }

  // ✅ If authenticated → allow
  if (isAuthenticated) {
    return <Outlet />;
  }

  // ❌ Only redirect AFTER loading is done
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;