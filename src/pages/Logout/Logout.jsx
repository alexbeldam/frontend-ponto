import { useEffect } from "react";
import { logout } from "../../utils/logout";
import { Navigate } from "react-router-dom";

export default function Logout() {
  useEffect(() => {
    logout();
  }, []);

  return <Navigate to='/login' replace />;
}
