import { FC, ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../../context/useAtuh";

interface Props {
  children: ReactNode;
}

const PublicAuthGuard: FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/home" /> : children;
};

export default PublicAuthGuard;
