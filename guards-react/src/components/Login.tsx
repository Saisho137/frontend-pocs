import { useAuth } from "../context/useAtuh";
import Header from "./Header";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  console.log("Log: ", isAuthenticated);

  return (
    <main>
      <Header />
      <h1>Login</h1>
      <button onClick={login}>Iniciar sesión</button>
    </main>
  );
};

export default Login;
