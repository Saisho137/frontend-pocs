import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/Home");
  };

  return (
    <section>
      <h1>Login</h1>
      <button onClick={handleSuccess}>Iniciar sesión</button>
    </section>
  );
};

export default LoginPage;
