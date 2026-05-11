import { FC } from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/useAtuh";

const PrivateAuthGuard: FC = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateAuthGuard;
