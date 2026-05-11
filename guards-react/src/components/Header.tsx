import { Link } from "react-router-dom";
import { useAuth } from "../context/useAtuh";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <header>
      <h2>Guards app</h2>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      {isAuthenticated && <button onClick={logout}>Cerrar sesión</button>}
    </header>
  );
};

export default Header;
