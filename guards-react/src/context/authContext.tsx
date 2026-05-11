import { createContext, FC, ReactNode, useMemo, useState } from "react";
import { AuthContextType } from "./useAtuh";

export const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    console.log("AUTENTICADO");
  };

  const logout = () => {
    setIsAuthenticated(false);
    console.log("Sesión cerrada");
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      login,
      logout,
    }),
    [isAuthenticated]
  );

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};
