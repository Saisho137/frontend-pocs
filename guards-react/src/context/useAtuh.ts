import { useContext } from "react";
import { AuthContext } from "./authContext";

export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext) as AuthContextType;
};
