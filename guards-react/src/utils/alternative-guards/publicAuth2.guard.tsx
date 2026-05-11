import { FC } from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/useAtuh";

const PrivateAuthGuard: FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/home" /> : <Outlet />;
};

export default PrivateAuthGuard;
