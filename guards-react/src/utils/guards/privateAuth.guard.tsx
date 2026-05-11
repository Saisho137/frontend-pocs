import { FC, ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../../context/useAtuh";

interface Props {
  children: ReactNode;
}

const PrivateAuthGuard: FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateAuthGuard;
